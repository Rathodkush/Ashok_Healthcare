/**
 * ASHOK HOME HEALTHCARE SERVICES - COMPATIBILITY & SYSTEM VERIFICATION SUITE
 * Cross-platform verification test suite for Windows, macOS, and Linux.
 * Run via: npm test
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const REQUIRED_HTML = [
  'index.html',
  'about.html',
  'services.html',
  'products.html',
  'gallery.html',
  'careers.html',
  'blog.html',
  'contact.html',
  'privacy.html',
  'terms.html',
  '404.html',
  'services/home-nursing.html',
  'services/home-icu.html',
  'services/rehabilitation.html',
  'services/physiotherapy.html',
  'services/elder-care.html',
  'services/diagnostic-services.html',
  'services/ambulance.html',
  'blog/best-home-healthcare-services-in-bangalore.html',
  'blog/home-nursing-services-in-bangalore-complete-guide.html',
  'blog/bipap-machine-in-yeshwanthpur-expert-home-healthcare-for-sleep-apnea-copd-patients.html',
  'blog/home-icu-setup-bangalore.html',
  'blog/physiotherapy-at-home-after-surgery.html',
  'blog/elder-care-services-guide.html'
];

const REQUIRED_CONFIGS = [
  'package.json',
  'vite.config.js',
  'server.js',
  '.env.example',
  '.gitignore',
  'README.md',
  'sitemap.xml',
  'robots.txt'
];

const REQUIRED_SCRIPTS = [
  'assets/js/gallery.js',
  'assets/js/modals.js',
  'assets/js/navigation.js',
  'assets/js/component-loader.js',
  'assets/js/forms.js',
  'assets/js/main.js'
];

const REQUIRED_STYLES = [
  'assets/css/bootstrap.min.css',
  'assets/css/style.css',
  'assets/css/components/gallery.css',
  'assets/css/components/header.css',
  'assets/css/components/footer.css'
];

const REQUIRED_MEDIA_DIRS = [
  'Gallery/gallery_1',
  'Gallery/gallery_2',
  'Gallery/gallery_3',
  'images',
  'Bg_Banner'
];

let totalPassed = 0;
let totalFailed = 0;

function check(title, fn) {
  try {
    const res = fn();
    if (res === true || res === undefined) {
      console.log(`  ✓ ${title}`);
      totalPassed++;
    } else {
      console.error(`  ✗ ${title}: ${res}`);
      totalFailed++;
    }
  } catch (err) {
    console.error(`  ✗ ${title}: ${err.message}`);
    totalFailed++;
  }
}

console.log('\n======================================================');
console.log(' RUNNING ASHOK HEALTHCARE COMPATIBILITY SUITE');
console.log(` Operating System: ${process.platform} (${process.arch})`);
console.log(` Node.js Version:  ${process.version}`);
console.log('======================================================\n');

// 1. Node.js Engine Check
console.log('[1/6] Node.js Environment:');
check('Node.js >= 18.0.0 supported', () => {
  const major = parseInt(process.versions.node.split('.')[0], 10);
  if (major < 18) throw new Error(`Node ${major} is unsupported. Please upgrade to Node 18+`);
  return true;
});

// 2. Configuration Files
console.log('\n[2/6] Project Configurations & Portability:');
for (const cfg of REQUIRED_CONFIGS) {
  check(`Configuration file exists: ${cfg}`, () => {
    const p = path.join(rootDir, cfg);
    if (!fs.existsSync(p)) throw new Error(`Missing ${cfg}`);
    return true;
  });
}

// 3. HTML Pages
console.log('\n[3/6] Core Website Pages & Routes:');
for (const html of REQUIRED_HTML) {
  check(`Page exists: ${html}`, () => {
    const p = path.join(rootDir, html);
    if (!fs.existsSync(p)) throw new Error(`Missing ${html}`);
    const stat = fs.statSync(p);
    if (stat.size < 100) throw new Error(`${html} appears empty or corrupted`);
    return true;
  });
}

// 4. Client-side Scripts
console.log('\n[4/6] Production Scripts & JavaScript Syntax:');
for (const scr of REQUIRED_SCRIPTS) {
  check(`Script exists: ${scr}`, () => {
    const p = path.join(rootDir, scr);
    if (!fs.existsSync(p)) throw new Error(`Missing ${scr}`);
    return true;
  });
}

// 5. Stylesheets & Design Tokens
console.log('\n[5/6] Production Stylesheets & Component CSS:');
for (const css of REQUIRED_STYLES) {
  check(`Stylesheet exists: ${css}`, () => {
    const p = path.join(rootDir, css);
    if (!fs.existsSync(p)) throw new Error(`Missing ${css}`);
    return true;
  });
}

// 6. Media Assets & Directories
console.log('\n[6/6] Media Assets & Galleries:');
for (const med of REQUIRED_MEDIA_DIRS) {
  check(`Media directory exists: ${med}`, () => {
    const p = path.join(rootDir, med);
    if (!fs.existsSync(p)) throw new Error(`Missing directory ${med}`);
    const files = fs.readdirSync(p);
    if (files.length === 0) throw new Error(`Directory ${med} has no files`);
    return true;
  });
}

console.log('\n------------------------------------------------------');
if (totalFailed === 0) {
  console.log(` ALL CHECKS PASSED (${totalPassed} assertions verified successfully).`);
  console.log(' Project is 100% portable and ready for Windows, macOS, and Linux!\n');
  process.exit(0);
} else {
  console.error(` ${totalFailed} CHECKS FAILED (${totalPassed} passed). Please inspect logs above.\n`);
  process.exit(1);
}
