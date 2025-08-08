require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/database');
const emailRoutes = require('./routes/emailRoutes');
const mongoose = require('mongoose'); // Added for health check

const app = express();

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet());

// CORS configuration for production and development
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001', 
  'http://127.0.0.1:3000',
  'https://shettys-engineering-classes-pune.vercel.app',
  'https://shettysengineeringclasses.com',
  'https://www.shettysengineeringclasses.com',
  // Add your Vercel domain here after deployment
  process.env.FRONTEND_URL // This will be set in Render environment variables
].filter(Boolean); // Remove undefined values

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Trust proxy for rate limiting
app.set('trust proxy', 1);

// Global rate limiting - more lenient
const globalRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // Increased limit
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(globalRateLimit);

// Routes
app.use('/api/email', emailRoutes);

// Health check route
app.get('/health', (req, res) => {
  const mongodbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    mongodb: mongodbStatus
  });
});

// API health check route
app.get('/api/health', (req, res) => {
  const mongodbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    mongodb: mongodbStatus
  });
});

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'SEC Pune Email API',
    version: '1.0.0',
    endpoints: {
      sendEmail: 'POST /api/email/send',
      healthCheck: 'GET /health'
    }
  });
});

// Test email route for debugging
app.post('/test-email', async (req, res) => {
  try {
    const { createTransporter, emailTemplates } = require('./config/email');
    const transporter = createTransporter();
    
    const testEmail = emailTemplates.adminNotification({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Email',
      message: 'This is a test email to verify the email configuration.',
      phone: '1234567890'
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: '🎉 Email Test Successful!',
      html: `
        <h2>🎉 Email Test Successful!</h2>
        <p>This is a test email to verify that the email configuration is working properly.</p>
        <p>If you receive this email, the SMTP settings are correctly configured!</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `
    });

    res.status(200).json({
      success: true,
      message: 'Test email sent successfully!'
    });
  } catch (error) {
    console.error('Test email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send test email',
      error: error.message
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

const PORT = process.env.PORT || 5000;

const startServer = (port) => {
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
    console.log(`📧 Email API ready at http://localhost:${port}`);
    console.log(`🔍 Health check: http://localhost:${port}/health`);
    console.log(`🧪 Test email: POST http://localhost:${port}/test-email`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️ Port ${port} is already in use, trying port ${port + 1}`);
      startServer(port + 1);
    } else {
      console.error('❌ Server error:', err);
    }
  });
};

startServer(PORT);

module.exports = app; 