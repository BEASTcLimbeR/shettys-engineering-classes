#!/bin/bash

# 🚀 Deployment Setup Script for Shetty's Engineering Classes
# This script helps organize your project for Vercel + Render deployment

echo "🚀 Setting up deployment structure..."

# Create frontend directory if it doesn't exist
if [ ! -d "frontend" ]; then
    echo "📁 Creating frontend directory..."
    mkdir -p frontend
fi

# Copy frontend files
echo "📋 Copying frontend files..."
cp -r src frontend/
cp -r public frontend/
cp package.json frontend/
cp next.config.ts frontend/
cp tsconfig.json frontend/
cp eslint.config.mjs frontend/
cp next-env.d.ts frontend/

# Create frontend environment file
echo "🔧 Creating frontend environment file..."
cat > frontend/.env.local << EOF
# Frontend Environment Variables
NEXT_PUBLIC_API_URL=http://localhost:5000
# Change this to your Render URL after deployment:
# NEXT_PUBLIC_API_URL=https://your-backend-name.onrender.com
EOF

# Update backend environment example
echo "🔧 Updating backend environment example..."
cat > backend/env.example << EOF
# Backend Environment Variables
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com
JWT_SECRET=your_secret_key_here
FRONTEND_URL=http://localhost:3000
# Change this to your Vercel URL after deployment:
# FRONTEND_URL=https://your-project-name.vercel.app
EOF

# Create deployment instructions
echo "📝 Creating deployment instructions..."
cat > DEPLOYMENT_INSTRUCTIONS.md << EOF
# 🚀 Quick Deployment Instructions

## 1. Backend Deployment (Render)

1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** shetty-engineering-backend
   - **Root Directory:** backend
   - **Environment:** Node
   - **Build Command:** npm install
   - **Start Command:** npm start
5. Add environment variables (see backend/env.example)
6. Deploy and copy the URL

## 2. Frontend Deployment (Vercel)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** frontend
   - **Build Command:** npm run build
5. Add environment variable:
   - **NEXT_PUBLIC_API_URL:** Your Render backend URL
6. Deploy

## 3. Update URLs

After deployment:
1. Update frontend/.env.local with your Render URL
2. Update backend environment variables with your Vercel URL
3. Redeploy both services

## 4. Test

1. Test the contact form on your Vercel site
2. Check if emails are being sent
3. Monitor logs in both platforms

🎉 Your site will be live!
EOF

echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Review DEPLOYMENT_INSTRUCTIONS.md"
echo "2. Update environment variables with your actual values"
echo "3. Deploy backend to Render first"
echo "4. Deploy frontend to Vercel"
echo "5. Update URLs and test"
echo ""
echo "📁 Project structure:"
echo "├── frontend/     (for Vercel deployment)"
echo "├── backend/      (for Render deployment)"
echo "└── DEPLOYMENT_INSTRUCTIONS.md"
echo ""
echo "🚀 Happy deploying!" 