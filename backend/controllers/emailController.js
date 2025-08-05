const Email = require('../models/Email');
const { createTransporter, emailTemplates } = require('../config/email');

// Send email and save to database
const sendEmail = async (req, res) => {
  try {
    console.log('📨 Email Controller - Starting email processing...');
    
    const { name, email, subject, message, phone } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('❌ Missing required fields');
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, subject, message',
        errors: {
          name: !name ? 'Name is required' : null,
          email: !email ? 'Email is required' : null,
          subject: !subject ? 'Subject is required' : null,
          message: !message ? 'Message is required' : null
        }
      });
    }

    // Log validated request data
    console.log('📨 Email Controller - Processing Request:');
    console.log('👤 Name:', name);
    console.log('📧 Email:', email);
    console.log('📝 Subject:', subject);
    console.log('💬 Message:', message);
    console.log('📱 Phone:', phone || 'Not provided');
    console.log('🌐 IP Address:', req.ip);
    console.log('⏰ Timestamp:', new Date().toISOString());

    // Create email record in database
    console.log('💾 Saving email record to database...');
    const emailRecord = new Email({
      name,
      email,
      subject,
      message,
      phone,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    await emailRecord.save();
    console.log('✅ Email record saved with ID:', emailRecord._id);

    // Send immediate success response
    res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
      emailId: emailRecord._id
    });

    // Process emails in background (non-blocking)
    processEmailsInBackground(emailRecord, name, email, subject, message, phone);

  } catch (error) {
    console.error('❌ Email Controller Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Background email processing function
const processEmailsInBackground = async (emailRecord, name, email, subject, message, phone) => {
  try {
    console.log('🔄 Processing emails in background...');
    
    // Create email transporter
    console.log('📤 Creating email transporter...');
    const transporter = createTransporter();

    // Send email to admin
    console.log('📧 Sending admin notification email...');
    const adminEmail = emailTemplates.adminNotification({
      name,
      email,
      subject,
      message,
      phone
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER, // Admin email
      subject: adminEmail.subject,
      html: adminEmail.html
    });
    console.log('✅ Admin notification email sent successfully');

    // Update status to sent
    emailRecord.status = 'sent';
    await emailRecord.save();
    console.log('✅ Email status updated to "sent"');

    // Send thank you email to sender
    console.log('📧 Sending thank you email to sender...');
    const thankYouEmail = emailTemplates.thankYouEmail({
      name,
      message
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: thankYouEmail.subject,
      html: thankYouEmail.html
    });
    console.log('✅ Thank you email sent successfully');

    // Update status to thank you sent
    emailRecord.status = 'thank_you_sent';
    emailRecord.thankYouSentAt = new Date();
    await emailRecord.save();
    console.log('✅ Email status updated to "thank_you_sent"');

    console.log('🎉 Background email processing completed successfully!');
  } catch (error) {
    console.error('❌ Background email processing error:', error);
    
    // Update status to failed
    emailRecord.status = 'failed';
    emailRecord.error = error.message;
    await emailRecord.save();
    console.log('❌ Email status updated to "failed"');
  }
};

  } catch (error) {
    console.error('❌ Email sending error:', error);
    console.error('🔍 Error details:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      command: error.command
    });

    // Update status to failed if email record exists
    if (req.body.email) {
      try {
        const emailRecord = await Email.findOne({
          email: req.body.email,
          subject: req.body.subject,
          createdAt: { $gte: new Date(Date.now() - 60000) } // Last minute
        });
        
        if (emailRecord) {
          emailRecord.status = 'failed';
          emailRecord.errorMessage = error.message;
          await emailRecord.save();
          console.log('💾 Updated email record status to "failed"');
        }
      } catch (dbError) {
        console.error('❌ Database error:', dbError);
      }
    }

    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your email settings.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Email connection failed. Please check your internet connection.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Email request timed out. Please try again.';
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Get all emails (admin only)
const getAllEmails = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, search } = req.query;

    // Build query
    const query = {};
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } }
      ];
    }

    // Get emails with pagination
    const emails = await Email.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // Get total count
    const total = await Email.countDocuments(query);

    res.status(200).json({
      success: true,
      data: {
        emails,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalEmails: total,
          hasNextPage: page * limit < total,
          hasPrevPage: page > 1
        }
      }
    });

  } catch (error) {
    console.error('Get emails error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch emails',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Get email statistics
const getEmailStats = async (req, res) => {
  try {
    const stats = await Email.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const totalEmails = await Email.countDocuments();
    const todayEmails = await Email.countDocuments({
      createdAt: { $gte: new Date().setHours(0, 0, 0, 0) }
    });

    const statsObject = {
      total: totalEmails,
      today: todayEmails,
      byStatus: {}
    };

    stats.forEach(stat => {
      statsObject.byStatus[stat._id] = stat.count;
    });

    res.status(200).json({
      success: true,
      data: statsObject
    });

  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch email statistics',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Resend failed emails
const resendFailedEmails = async (req, res) => {
  try {
    const failedEmails = await Email.find({ status: 'failed' });

    if (failedEmails.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No failed emails to resend'
      });
    }

    const transporter = createTransporter();
    let successCount = 0;
    let errorCount = 0;

    for (const emailRecord of failedEmails) {
      try {
        // Send to admin
        const adminEmail = emailTemplates.adminNotification({
          name: emailRecord.name,
          email: emailRecord.email,
          subject: emailRecord.subject,
          message: emailRecord.message,
          phone: emailRecord.phone
        });

        await transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_USER,
          subject: adminEmail.subject,
          html: adminEmail.html
        });

        // Send thank you email
        const thankYouEmail = emailTemplates.thankYouEmail({
          name: emailRecord.name,
          message: emailRecord.message
        });

        await transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: emailRecord.email,
          subject: thankYouEmail.subject,
          html: thankYouEmail.html
        });

        // Update status
        emailRecord.status = 'thank_you_sent';
        emailRecord.thankYouSentAt = new Date();
        emailRecord.errorMessage = undefined;
        await emailRecord.save();

        successCount++;

      } catch (error) {
        console.error(`Failed to resend email ${emailRecord._id}:`, error);
        emailRecord.errorMessage = error.message;
        await emailRecord.save();
        errorCount++;
      }
    }

    res.status(200).json({
      success: true,
      message: `Resend completed. Success: ${successCount}, Failed: ${errorCount}`,
      data: { successCount, errorCount }
    });

  } catch (error) {
    console.error('Resend emails error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to resend emails',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

module.exports = {
  sendEmail,
  getAllEmails,
  getEmailStats,
  resendFailedEmails
}; 