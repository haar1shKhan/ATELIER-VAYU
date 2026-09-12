const fs = require('fs');

const landing = fs.readFileSync('landing_stitch.html', 'utf8');

const headerMatch = landing.match(/<header[\s\S]*?<\/header>/i);
console.log('Landing header length:', headerMatch ? headerMatch[0].length : 0);
if (headerMatch) {
  fs.writeFileSync('extracted_landing_header.html', headerMatch[0]);
}

const footerMatch = landing.match(/<footer[\s\S]*?<\/footer>/i);
console.log('Landing footer length:', footerMatch ? footerMatch[0].length : 0);
if (footerMatch) {
  fs.writeFileSync('extracted_landing_footer.html', footerMatch[0]);
}
