const fs = require('fs-extra');
const concat = require('concat');

(async () => {
  const files = [
    './dist/dieover/main.js',
    './dist/dieover/polyfills.js',
    './dist/dieover/runtime.js'
  ];

  await fs.ensureDir('public');
  await concat(files, '/Users/lennon/Documents/Projects/npms/wc/lib/index.js');
})();
