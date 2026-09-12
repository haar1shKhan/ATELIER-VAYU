const fs = require('fs');

function inspectSections(filename) {
  console.log('=== ' + filename + ' ===');
  const content = fs.readFileSync(filename, 'utf8');
  const sections = content.match(/<section[\s\S]*?<\/section>/gi) || [];
  console.log('Total sections:', sections.length);
  sections.forEach((sec, i) => {
    const firstLine = sec.split('\n')[0].slice(0, 100);
    const idMatch = sec.match(/id="([^"]+)"/);
    const hMatch = sec.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/i);
    const heading = hMatch ? hMatch[1].replace(/<[^>]+>/g, '').trim().slice(0, 60) : 'no heading';
    console.log(`[${i}] id=${idMatch ? idMatch[1] : 'none'} | heading="${heading}" | tag=${firstLine}`);
  });
}

inspectSections('plp_stitch.html');
inspectSections('pdp_stitch.html');
