#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Heavy dependencies that might be unused
const heavyDependencies = [
  'gsap',
  'keen-slider', 
  'lottie-react',
  'react-syntax-highlighter',
  'prismjs',
  '@monaco-editor/react',
  'react-datepicker',
  'react-hook-form',
  'yup',
  'recoil',
  'zustand',
  'styled-components',
  'sass',
  'webfontloader'
];

// Check if dependencies are actually used
function checkDependencyUsage(dependency) {
  const srcPath = path.join(process.cwd(), 'src');
  
  function searchInDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        searchInDirectory(fullPath);
      } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts') || file.name.endsWith('.js')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes(`from '${dependency}'`) || content.includes(`import '${dependency}'`) || content.includes(`require('${dependency}')`)) {
            return true;
          }
        } catch (error) {
          console.error(`Error reading ${fullPath}:`, error.message);
        }
      }
    }
    return false;
  }
  
  return searchInDirectory(srcPath);
}

// Check package.json for dependencies
function checkPackageJson() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const allDependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    };
    
    console.log('🔍 Analyzing dependencies...\n');
    
    const unusedHeavyDeps = [];
    const usedHeavyDeps = [];
    
    for (const dep of heavyDependencies) {
      if (allDependencies[dep]) {
        const isUsed = checkDependencyUsage(dep);
        if (isUsed) {
          usedHeavyDeps.push(dep);
          console.log(`✅ ${dep} - USED`);
        } else {
          unusedHeavyDeps.push(dep);
          console.log(`❌ ${dep} - UNUSED`);
        }
      }
    }
    
    console.log('\n📊 Summary:');
    console.log(`Used heavy dependencies: ${usedHeavyDeps.length}`);
    console.log(`Unused heavy dependencies: ${unusedHeavyDeps.length}`);
    
    if (unusedHeavyDeps.length > 0) {
      console.log('\n🚀 To remove unused dependencies, run:');
      console.log(`npm uninstall ${unusedHeavyDeps.join(' ')}`);
      
      console.log('\n💡 Estimated bundle size reduction:');
      const estimatedReduction = unusedHeavyDeps.length * 50; // Rough estimate in KB
      console.log(`${estimatedReduction}KB - ${estimatedReduction * 2}KB`);
    }
    
    return { unusedHeavyDeps, usedHeavyDeps };
    
  } catch (error) {
    console.error('Error reading package.json:', error.message);
    return { unusedHeavyDeps: [], usedHeavyDeps: [] };
  }
}

// Performance recommendations
function getPerformanceRecommendations() {
  console.log('\n🎯 Performance Recommendations:');
  console.log('1. Use the new LightweightAnimations component instead of Framer Motion where possible');
  console.log('2. Replace ThreeJS background with CSS gradients for better performance');
  console.log('3. Implement lazy loading for heavy components');
  console.log('4. Use Next.js Image component for all images');
  console.log('5. Consider using CSS-in-JS alternatives to styled-components');
  console.log('6. Implement service worker for caching');
  console.log('7. Use dynamic imports for heavy libraries');
}

// Main execution
if (require.main === module) {
  console.log('🚀 Performance Optimization Script\n');
  
  const { unusedHeavyDeps } = checkPackageJson();
  getPerformanceRecommendations();
  
  if (unusedHeavyDeps.length > 0) {
    console.log('\n✨ Quick optimization commands:');
    console.log('# Remove unused dependencies');
    console.log(`npm uninstall ${unusedHeavyDeps.join(' ')}`);
    console.log('\n# Install bundle analyzer');
    console.log('npm install --save-dev @next/bundle-analyzer');
    console.log('\n# Build and analyze bundle');
    console.log('npm run build');
    console.log('npm run analyze');
  }
}

module.exports = { checkDependencyUsage, checkPackageJson }; 