const pa11y = require('pa11y');

const urls = [
  'https://light-of-light-csdns055x-mohammad-abbas-projects-046b0de8.vercel.app/',
];

async function runScans() {
  for (const url of urls) {
    console.log(`\n🔍 Scanning ${url}...`);
    try {
      const results = await pa11y(url, {
        timeout: 60000,
        chromeLaunchConfig: {
          executablePath: require('puppeteer').executablePath(),
        }
      });

      results.issues.forEach(issue => {
        console.log(`❌ [${issue.code}] ${issue.message}`);
        console.log(` ↳ Selector: ${issue.selector}`);
        console.log('');
      });

      if (results.issues.length === 0) {
        console.log('✅ No accessibility issues found.');
      }
    } catch (err) {
      console.error(`⚠️ Error scanning ${url}:`, err.message);
    }
  }
}

runScans();
