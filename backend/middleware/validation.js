const { body, validationResult } = require('express-validator');

// Validation rules for email form - More lenient and practical
const validateEmailForm = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s\.]+$/) // Allow dots for names like "Rutvij Deo"
    .withMessage('Name can only contain letters, spaces, and dots'),

  body('email')
    .trim()
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),

  body('subject')
    .trim()
    .isLength({ min: 3, max: 200 }) // Reduced minimum from 5 to 3
    .withMessage('Subject must be between 3 and 200 characters'),

  body('message')
    .trim()
    .isLength({ min: 5, max: 2000 }) // Reduced minimum from 10 to 5
    .withMessage('Message must be between 5 and 2000 characters'),

  body('phone')
    .optional()
    .trim()
    .matches(/^[\+]?[0-9\s\-\(\)]{7,15}$/) // More lenient phone regex
    .withMessage('Please enter a valid phone number')
];

// Check for validation errors
const handleValidationErrors = (req, res, next) => {
  // Log incoming request body
  console.log('📧 Email Request Received:');
  console.log('📋 Request Body:', JSON.stringify(req.body, null, 2));
  console.log('🌐 IP Address:', req.ip);
  console.log('👤 User Agent:', req.get('User-Agent'));
  
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    console.log('❌ Validation Errors Found:');
    console.log('🔍 Validation Errors:', JSON.stringify(errors.array(), null, 2));
    
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg,
        value: error.value
      }))
    });
  }
  
  console.log('✅ Validation passed, proceeding to controller');
  next();
};

module.exports = {
  validateEmailForm,
  handleValidationErrors
}; 