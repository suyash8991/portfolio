/**
 * SVGRepo Logo Download Script
 * 
 * Downloads technology logos from SVGRepo.com
 * Run: node scripts/download-svgrepo-logos.js
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOGOS_DIR = path.join(__dirname, '../public/logos');

// Ensure logos directory exists
if (!fs.existsSync(LOGOS_DIR)) {
  fs.mkdirSync(LOGOS_DIR, { recursive: true });
}

// SVGRepo download URLs for technology logos
const logoUrls = {
  // Programming Languages
  'python': 'https://www.svgrepo.com/download/452091/python.svg',
  'javascript': 'https://www.svgrepo.com/download/303206/javascript-logo.svg',
  'java': 'https://www.svgrepo.com/download/184143/java.svg',
  'cplusplus': 'https://www.svgrepo.com/download/303480/c-logo.svg',
  'sql': 'https://www.svgrepo.com/download/331760/sql-database-generic.svg',
  'haskell': 'https://www.svgrepo.com/download/354053/haskell.svg',
  
  // AI/ML Frameworks
  'tensorflow': 'https://www.svgrepo.com/download/303557/tensorflow-logo.svg',
  'pytorch': 'https://www.svgrepo.com/download/354238/pytorch.svg',
  'scikit-learn': 'https://www.svgrepo.com/download/354252/scikit-learn.svg',
  
  // Data Analysis
  'pandas': 'https://www.svgrepo.com/download/354200/pandas-icon.svg',
  'numpy': 'https://www.svgrepo.com/download/354180/numpy.svg',
  'power-bi': 'https://www.svgrepo.com/download/354230/power-bi.svg',
  
  // Cloud & DevOps
  'aws': 'https://www.svgrepo.com/download/448266/aws.svg',
  'docker': 'https://www.svgrepo.com/download/303231/docker-logo.svg',
  'kubernetes': 'https://www.svgrepo.com/download/448233/kubernetes.svg',
  'jenkins': 'https://www.svgrepo.com/download/353935/jenkins.svg',
  'git': 'https://www.svgrepo.com/download/452210/git.svg',
  
  // Databases
  'postgresql': 'https://www.svgrepo.com/download/354200/postgresql.svg',
  'mongodb': 'https://www.svgrepo.com/download/331488/mongodb.svg',
  
  // Generic Icons
  'vector-databases': 'https://www.svgrepo.com/download/532997/database.svg',
  'etl-pipelines': 'https://www.svgrepo.com/download/532990/workflow.svg',
  'data-visualization': 'https://www.svgrepo.com/download/532535/chart-line.svg'
};

async function downloadSVG(name, url) {
  const filePath = path.join(LOGOS_DIR, `${name}.svg`);
  
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${name}.svg`);
          resolve();
        });
        
        fileStream.on('error', (err) => {
          console.log(`❌ Error writing ${name}.svg:`, err.message);
          reject(err);
        });
      } else {
        console.log(`❌ Failed to download: ${name}.svg (HTTP ${response.statusCode})`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`❌ Network error downloading ${name}.svg:`, err.message);
      reject(err);
    });
  });
}

async function downloadAllLogos() {
  console.log('🚀 Starting SVGRepo logo downloads...\n');
  
  const entries = Object.entries(logoUrls);
  let successCount = 0;
  let failCount = 0;
  
  for (const [name, url] of entries) {
    try {
      await downloadSVG(name, url);
      successCount++;
      // Small delay to be respectful to the server
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (error) {
      failCount++;
      // Continue with other downloads even if one fails
    }
  }
  
  console.log('\n📊 Download Summary:');
  console.log(`✅ Successfully downloaded: ${successCount} logos`);
  console.log(`❌ Failed downloads: ${failCount} logos`);
  console.log('\n📁 Logos saved to: public/logos/');
  
  if (failCount > 0) {
    console.log('\n🔧 Manual download may be needed for failed logos:');
    console.log('   Visit https://www.svgrepo.com and search for the specific technology');
    console.log('   Look for official brand colors and download as SVG');
  }
  
  console.log('\n🎨 Additional logos you may need to find manually:');
  console.log('   - LangChain: https://python.langchain.com (brand assets)');
  console.log('   - RAGAS: https://docs.ragas.io (may need custom icon)');
  console.log('   - Qlik Sense: https://www.qlik.com/us/brand (official brand assets)');
}

// Run the download process
downloadAllLogos().catch(console.error);
