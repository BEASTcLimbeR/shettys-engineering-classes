const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Check if MONGODB_URI is provided
    if (!process.env.MONGODB_URI) {
      console.log('⚠️ MONGODB_URI not found in environment variables');
      console.log('📝 Please set MONGODB_URI in your .env file');
      console.log('🔗 Example: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database');
      console.log('💡 For local development, you can use: MONGODB_URI=mongodb://localhost:27017/sec-pune');
      console.log('🚀 Server will continue without database connection');
      return; // Don't exit, just skip database connection
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ MongoDB disconnected');
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('🔄 MongoDB connection closed through app termination');
      process.exit(0);
    });

  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('💡 Please check your MONGODB_URI in the .env file');
    console.log('🚀 Server will continue without database connection');
    // Don't exit the process, just log the error
  }
};

module.exports = connectDB; 