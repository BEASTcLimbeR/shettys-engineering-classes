const express = require('express');
const rateLimit = require('express-rate-limit');
const { validateEmailForm, handleValidationErrors } = require('../middleware/validation');
const {
  sendEmail,
  getAllEmails,
  getEmailStats,
  resendFailedEmails
} = require('../controllers/emailController');

const router = express.Router();

// Rate limiting for email sending
const emailRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 email requests per windowMs
  message: {
    success: false,
    message: 'Too many email requests from this IP, please try again after 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Send email route with validation
router.post('/send', 
  emailRateLimit,
  validateEmailForm,
  handleValidationErrors,
  sendEmail
);

// Test email route without validation (for debugging)
router.post('/send-test', 
  emailRateLimit,
  sendEmail
);

// Admin routes (you can add authentication middleware here)
router.get('/admin/emails', getAllEmails);
router.get('/admin/stats', getEmailStats);
router.post('/admin/resend-failed', resendFailedEmails);

module.exports = router; 