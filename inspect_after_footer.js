const fs = require('fs');

const landing = fs.readFileSync('landing_stitch.html', 'utf8');
const footerEnd = landing.lastIndexOf('</footer>');
console.log('After footer:');
console.log(landing.slice(footerEnd + 9, footerEnd + 2000));
