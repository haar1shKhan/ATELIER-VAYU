const fs = require('fs');

const landing = fs.readFileSync('landing_stitch.html', 'utf8');
const endSnippet = landing.slice(landing.lastIndexOf('<footer'));
console.log(endSnippet.slice(0, 1500));
