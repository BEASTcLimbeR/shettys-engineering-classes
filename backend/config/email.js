const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  try {
    console.log('📧 Creating email transporter...');
    console.log('📧 Email Host:', process.env.EMAIL_HOST);
    console.log('📧 Email Port:', process.env.EMAIL_PORT);
    console.log('📧 Email User:', process.env.EMAIL_USER);
    console.log('📧 Email From:', process.env.EMAIL_FROM);
    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify connection configuration
    transporter.verify(function(error, success) {
      if (error) {
        console.error('❌ Email transporter verification failed:', error);
      } else {
        console.log('✅ Email transporter is ready');
      }
    });

    return transporter;
  } catch (error) {
    console.error('❌ Failed to create email transporter:', error);
    throw error;
  }
};

// Email templates
const emailTemplates = {
  // Admin notification email
  adminNotification: ({ name, email, subject, message, phone }) => ({
    subject: `📧 New Contact Form Submission - ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #1976d2; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">📧 New Contact Form Submission</h1>
        </div>
        
        <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #1976d2; margin-top: 0;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #666;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 8px 0; color: #666;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Subject:</td>
              <td style="padding: 8px 0; color: #666;">${subject}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 8px 0; color: #666;">${phone}</td>
            </tr>
            ` : ''}
          </table>
          
          <h3 style="color: #1976d2; margin-top: 20px;">Message</h3>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #1976d2;">
            <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 5px;">
            <p style="margin: 0; color: #1976d2; font-size: 14px;">
              <strong>Timestamp:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>This email was sent from the contact form on Shetty's Engineering Classes website.</p>
        </div>
      </div>
    `
  }),

  // Thank you email to sender
  thankYouEmail: ({ name, message }) => ({
    subject: 'Thank you for contacting Shetty\'s Engineering Classes!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ff6b35; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">🎓 Thank You!</h1>
        </div>
        
        <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #ff6b35; margin-top: 0;">Dear ${name},</h2>
          
          <p style="line-height: 1.6; color: #333; margin-bottom: 20px;">
            Thank you for reaching out to <strong>Shetty's Engineering Classes</strong>! We have received your message and will get back to you as soon as possible.
          </p>
          
          <div style="background-color: #fff3e0; padding: 15px; border-radius: 5px; border-left: 4px solid #ff6b35; margin: 20px 0;">
            <h3 style="color: #ff6b35; margin-top: 0;">Your Message</h3>
            <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <h3 style="color: #ff6b35;">What's Next?</h3>
          <ul style="color: #333; line-height: 1.6;">
            <li>Our team will review your inquiry within 24 hours</li>
            <li>We'll contact you via email or phone to discuss your requirements</li>
            <li>You can also reach us directly at <strong>+91 99234 60156</strong></li>
          </ul>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
            <h4 style="color: #ff6b35; margin-top: 0;">Quick Contact</h4>
            <p style="margin: 5px 0; color: #333;">
              <strong>📞 Phone:</strong> +91 99234 60156<br>
              <strong>📧 Email:</strong> shettyseng@gmail.com<br>
              <strong>📍 Address:</strong> Shetty's Engineering Classes, 3rd Floor Besides Namaskar Restaurant, Ghole Rd, opposite MJM Hospital, Sud Nagar, Shivajinagar, Pune, Maharashtra 411004
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>© 2024 Shetty's Engineering Classes. All rights reserved.</p>
        </div>
      </div>
    `
  })
};

module.exports = {
  createTransporter,
  emailTemplates
}; 