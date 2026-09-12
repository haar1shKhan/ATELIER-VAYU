const fs = require('fs');

for (const file of ['landing_stitch.html', 'pdp_stitch.html', 'plp_stitch.html']) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<script id="tailwind-config">([\s\S]*?)<\/script>/i);
  console.log('=== ' + file + ' ===');
  if (match) {
    console.log(match[1].trim());
  } else {
    console.log('No tailwind script match');
  }
}
