const http = require('http');

// Test the health endpoint
const testHealth = () => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: '/health',
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
};

// Test the root endpoint
const testRoot = () => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: '/',
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
};

// Run tests
const runTests = async () => {
  console.log('🧪 Testing backend server...\n');

  try {
    console.log('1. Testing health endpoint...');
    const healthResponse = await testHealth();
    console.log('✅ Health endpoint working:', healthResponse);
    console.log('');

    console.log('2. Testing root endpoint...');
    const rootResponse = await testRoot();
    console.log('✅ Root endpoint working:', rootResponse);
    console.log('');

    console.log('🎉 Backend server is working correctly!');
    console.log('📧 Email API ready at http://localhost:5000');
    console.log('🔍 Health check: http://localhost:5000/health');
    console.log('🧪 Test email: POST http://localhost:5000/test-email');

  } catch (error) {
    console.error('❌ Backend test failed:', error.message);
    console.log('');
    console.log('💡 Make sure the server is running with: node server.js');
  }
};

runTests();
