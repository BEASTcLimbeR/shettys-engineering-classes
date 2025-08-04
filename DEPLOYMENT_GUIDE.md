# 🚀 Deployment Guide: Vercel (Frontend) + Render (Backend)

## 📁 Project Structure

```
shettys-engineering-classes/
├── frontend/                 # Next.js Frontend (Vercel)
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── next.config.ts
│   ├── vercel.json
│   └── tsconfig.json
├── backend/                  # Node.js Backend (Render)
│   ├── server.js
│   ├── package.json
│   ├── render.yaml
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
└── README.md
```

## 🔧 Step 1: Prepare Your Code

### Frontend Changes Needed

1. **Update API URLs in ContactSection.tsx:**
```typescript
// Change from localhost to your Render URL
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-name.onrender.com' 
  : 'http://localhost:5000';
```

2. **Create Environment Variables:**
Create `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=https://your-backend-name.onrender.com
```

### Backend Changes Needed

1. **Update CORS in server.js:**
```javascript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'https://your-frontend-domain.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## 🌐 Step 2: Deploy Backend to Render

### 2.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Connect your GitHub repository

### 2.2 Deploy Backend
1. **Click "New +" → "Web Service"**
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Name:** `shetty-engineering-backend`
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

### 2.3 Set Environment Variables
In Render dashboard, go to your service → Environment → Add these variables:

```env
NODE_ENV=production
PORT=10000
MONGODB_URI=your_mongodb_atlas_connection_string
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com
JWT_SECRET=your_secret_key_here
```

### 2.4 Deploy
1. Click "Create Web Service"
2. Wait for deployment (2-3 minutes)
3. Copy your service URL (e.g., `https://shetty-engineering-backend.onrender.com`)

## ⚡ Step 3: Deploy Frontend to Vercel

### 3.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Connect your GitHub repository

### 3.2 Deploy Frontend
1. **Click "New Project"**
2. **Import your GitHub repository**
3. **Configure the project:**
   - **Framework Preset:** Next.js
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

### 3.3 Set Environment Variables
In Vercel dashboard, go to your project → Settings → Environment Variables:

```env
NEXT_PUBLIC_API_URL=https://your-backend-name.onrender.com
```

### 3.4 Deploy
1. Click "Deploy"
2. Wait for deployment (1-2 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

## 🔄 Step 4: Update API URLs

### 4.1 Update Frontend API Calls
In `frontend/src/components/ContactSection.tsx`:

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  
  try {
    const response = await fetch(`${API_URL}/api/email/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    // ... rest of the code
  } catch (error) {
    // ... error handling
  }
};
```

### 4.2 Update Backend CORS
In `backend/server.js`:

```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://your-frontend-domain.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## 🧪 Step 5: Test Your Deployment

### 5.1 Test Backend
```bash
# Test health check
curl https://your-backend-name.onrender.com/health

# Test email endpoint
curl -X POST https://your-backend-name.onrender.com/api/email/send \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Email",
    "message": "This is a test email"
  }'
```

### 5.2 Test Frontend
1. Visit your Vercel URL
2. Test the contact form
3. Check if emails are being sent
4. Verify all functionality works

## 🔧 Step 6: Custom Domain (Optional)

### 6.1 Vercel Custom Domain
1. Go to your Vercel project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### 6.2 Render Custom Domain
1. Go to your Render service → Settings → Custom Domains
2. Add your custom domain
3. Update DNS records

## 📊 Step 7: Monitoring & Analytics

### 7.1 Vercel Analytics
- Enable Vercel Analytics in your project settings
- Monitor performance and user behavior

### 7.2 Render Monitoring
- Monitor your backend service in Render dashboard
- Check logs for any errors

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Ensure your frontend domain is in the allowed origins
   - Check that environment variables are set correctly

2. **Email Not Sending:**
   - Verify SMTP credentials in Render environment variables
   - Check Render logs for error messages

3. **Build Failures:**
   - Check that all dependencies are in package.json
   - Verify Node.js version compatibility

4. **Environment Variables:**
   - Ensure all variables are set in both Vercel and Render
   - Restart services after adding new variables

## 📞 Support

If you encounter issues:
1. Check Render logs: Service → Logs
2. Check Vercel logs: Project → Functions → Logs
3. Test locally first before deploying
4. Use the test endpoints to verify backend functionality

## 🎉 Success!

Once deployed, your application will be:
- **Frontend:** `https://your-project.vercel.app`
- **Backend:** `https://your-backend-name.onrender.com`

Both services will automatically redeploy when you push changes to your GitHub repository! 