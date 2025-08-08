const mongoose = require('mongoose');
const Email = require('./models/Email');

// Test database connection
const testDatabase = async () => {
  console.log('🧪 Testing database functionality...\n');

  try {
    // Check if MONGODB_URI is set
    if (!process.env.MONGODB_URI) {
      console.log('⚠️ MONGODB_URI not found in environment variables');
      console.log('📝 Database connection test skipped');
      console.log('💡 To test database, set MONGODB_URI in your .env file');
      console.log('🔗 Example: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database');
      return;
    }

    console.log('1. Testing database connection...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Database connected successfully');
    console.log(`📊 Database: ${mongoose.connection.name}`);
    console.log(`🌐 Host: ${mongoose.connection.host}`);
    console.log('');

    console.log('2. Testing Email model...');
    const emailCount = await Email.countDocuments();
    console.log(`✅ Email model working - ${emailCount} emails in database`);
    console.log('');

    console.log('3. Testing database operations...');
    
    // Test creating an email
    const testEmail = new Email({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Database Test',
      message: 'This is a test email to verify database functionality.',
      phone: '1234567890',
      status: 'pending'
    });

    await testEmail.save();
    console.log('✅ Email creation test passed');
    console.log(`📧 Created email with ID: ${testEmail._id}`);
    console.log('');

    // Test finding emails
    const emails = await Email.find().limit(5);
    console.log(`✅ Email retrieval test passed - Found ${emails.length} emails`);
    console.log('');

    // Clean up test email
    await Email.findByIdAndDelete(testEmail._id);
    console.log('✅ Email deletion test passed');
    console.log('');

    console.log('🎉 Database is working correctly!');
    console.log('📊 All database operations successful');
    console.log('🔗 MongoDB connection stable');

  } catch (error) {
    console.error('❌ Database test failed:', error.message);
    console.log('');
    console.log('💡 Common issues:');
    console.log('   - Check MONGODB_URI in .env file');
    console.log('   - Verify MongoDB Atlas connection string');
    console.log('   - Ensure network connectivity');
    console.log('   - Check if MongoDB service is running');
  } finally {
    // Close connection
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
      console.log('🔄 Database connection closed');
    }
  }
};

// Run the test
testDatabase();
