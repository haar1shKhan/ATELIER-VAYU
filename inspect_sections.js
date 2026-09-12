const fs = require('fs');

function inspectFile(filename) {
  console.log('========================================');
  console.log('FILE:', filename);
  const html = fs.readFileSync(filename, 'utf8');
  
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    console.log('No body found');
    return;
  }
  const body = bodyMatch[1];
  console.log('Body length:', body.length);
  
  // Look for sections / headers / footers / navs
  const tagMatches = body.match(/<(header|nav|section|main|footer|article|aside)[^>]*>/gi) || [];
  console.log('Top level tags found:', tagMatches.length);
  tagMatches.slice(0, 15).forEach(t => console.log('  ', t.slice(0, 120)));
}

inspectFile('landing_stitch.html');
inspectFile('plp_stitch.html');
inspectFile('pdp_stitch.html');
