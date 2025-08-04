# SEC Pune Email Backend

A comprehensive email system backend for SEC Pune with MongoDB Atlas integration, featuring automatic thank you emails and admin notifications.

## Features

- ✅ **Email Sending**: Send emails with form validation
- ✅ **MongoDB Atlas Integration**: Store all email data in cloud database
- ✅ **Thank You Emails**: Automatic thank you emails to senders
- ✅ **Admin Notifications**: Email notifications to admin
- ✅ **Rate Limiting**: Prevent spam and abuse
- ✅ **Email Templates**: Professional HTML email templates
- ✅ **Error Handling**: Comprehensive error handling and logging
- ✅ **Security**: Helmet, CORS, and input validation
- ✅ **Statistics**: Email statistics and analytics
- ✅ **Failed Email Recovery**: Resend failed emails

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the backend directory:

```bash
cp env.example .env
```

Edit the `.env` file with your configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Atlas Configuration
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database?retryWrites=true&w=majority

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com

# Security
JWT_SECRET=your_jwt_secret_key_here
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 3. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Create a database user
5. Get your connection string
6. Replace the `MONGODB_URI` in your `.env` file

### 4. Gmail Setup

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. Use this app password in your `.env` file

### 5. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Send Email
```
POST /api/email/send
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Course Inquiry",
  "message": "I would like to know more about your courses.",
  "phone": "+1234567890" // Optional
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully! Check your inbox for a confirmation.",
  "data": {
    "id": "email_id",
    "status": "thank_you_sent"
  }
}
```

### Health Check
```
GET /health
```

### Admin Endpoints

#### Get All Emails
```
GET /api/email/admin/emails?page=1&limit=10&status=sent&search=john
```

#### Get Email Statistics
```
GET /api/email/admin/stats
```

#### Resend Failed Emails
```
POST /api/email/admin/resend-failed
```

## Frontend Integration

### JavaScript Example

```javascript
const sendEmail = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    
    if (result.success) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email: ' + result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send email');
  }
};

// Usage
sendEmail({
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Course Inquiry',
  message: 'I would like to know more about your courses.',
  phone: '+1234567890'
});
```

### React Example

```jsx
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.success) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
      } else {
        alert('Failed to send email: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={(e) => setFormData({...formData, subject: e.target.value})}
        required
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        required
      />
      <input
        type="tel"
        placeholder="Phone (optional)"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Email'}
      </button>
    </form>
  );
};

export default ContactForm;
```

## Email Templates

The system includes two email templates:

1. **Admin Notification**: Sent to admin when a new email is received
2. **Thank You Email**: Sent to the sender confirming receipt

Both templates are professional and branded for SEC Pune.

## Security Features

- **Rate Limiting**: Prevents spam and abuse
- **Input Validation**: Validates all form inputs
- **CORS Protection**: Configurable CORS settings
- **Helmet Security**: Security headers
- **Error Handling**: Comprehensive error handling

## Database Schema

The Email model includes:

- Name, email, subject, message, phone
- Status tracking (pending, sent, failed, thank_you_sent)
- Timestamps and metadata
- Error messages for failed emails
- IP address and user agent tracking

## Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check your MongoDB Atlas connection string
   - Ensure your IP is whitelisted in Atlas

2. **Email Sending Failed**
   - Verify Gmail app password
   - Check email configuration in `.env`

3. **CORS Errors**
   - Update CORS origin in `server.js`
   - Ensure frontend URL is included

### Logs

Check the console for detailed error messages and logs.

## License

ISC 