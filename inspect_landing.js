const fs = require('fs');

const landing = fs.readFileSync('landing_stitch.html', 'utf8');

// Extract sections
const sections = landing.match(/<section[\s\S]*?<\/section>/gi) || [];
console.log('Total sections in landing_stitch.html:', sections.length);

sections.forEach((sec, i) => {
  const firstLine = sec.split('\n')[0].slice(0, 100);
  const idMatch = sec.match(/id="([^"]+)"/);
  const hMatch = sec.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/i);
  const heading = hMatch ? hMatch[1].replace(/<[^>]+>/g, '').trim().slice(0, 50) : 'no heading';
  console.log(`[${i}] id=${idMatch ? idMatch[1] : 'none'} | heading="${heading}" | tag=${firstLine}`);
});
