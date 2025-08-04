require('dotenv').config();
const { createTransporter, emailTemplates } = require('./config/email');

async function testEmail() {
  try {
    console.log('🧪 Testing email functionality...');
    console.log('📧 Email Host:', process.env.EMAIL_HOST);
    console.log('📧 Email Port:', process.env.EMAIL_PORT);
    console.log('📧 Email User:', process.env.EMAIL_USER);
    console.log('📧 Email From:', process.env.EMAIL_FROM);
    
    const transporter = createTransporter();
    
    // Test admin notification
    console.log('📧 Sending test admin notification...');
    const adminEmail = emailTemplates.adminNotification({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message to verify email functionality.',
      phone: '1234567890'
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: adminEmail.subject,
      html: adminEmail.html
    });
    console.log('✅ Admin notification sent successfully!');

    // Test thank you email
    console.log('📧 Sending test thank you email...');
    const thankYouEmail = emailTemplates.thankYouEmail({
      name: 'Test User',
      message: 'This is a test message to verify email functionality.'
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: 'test@example.com',
      subject: thankYouEmail.subject,
      html: thankYouEmail.html
    });
    console.log('✅ Thank you email sent successfully!');

    console.log('🎉 All email tests passed!');
    
  } catch (error) {
    console.error('❌ Email test failed:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command
    });
  }
}

testEmail(); 