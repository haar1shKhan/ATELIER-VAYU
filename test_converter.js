const fs = require('fs');

function htmlToJsx(html) {
  let jsx = html;
  
  // Replace class with className
  jsx = jsx.replace(/\bclass="/g, 'className="');
  
  // Replace for with htmlFor
  jsx = jsx.replace(/\bfor="/g, 'htmlFor="');
  
  // Replace tabindex
  jsx = jsx.replace(/\btabindex="/g, 'tabIndex="');
  
  // Replace autocomplete
  jsx = jsx.replace(/\bautocomplete="/g, 'autoComplete="');
  
  // Replace clip-rule / fill-rule
  jsx = jsx.replace(/clip-rule="/g, 'clipRule="');
  jsx = jsx.replace(/fill-rule="/g, 'fillRule="');
  
  // Replace stroke attributes if any
  jsx = jsx.replace(/stroke-width="/g, 'strokeWidth="');
  jsx = jsx.replace(/stroke-linecap="/g, 'strokeLinecap="');
  jsx = jsx.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
  
  // Void tags self-closing: img, input, hr, br
  jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/gi, '<img$1 />');
  jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />');
  jsx = jsx.replace(/<br\s*>/gi, '<br />');
  jsx = jsx.replace(/<hr([^>]*?)(?<!\/)>/gi, '<hr$1 />');

  // Convert inline style strings e.g. style="width: 50%" or style="background-image: url(...)"
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const rules = styleStr.split(';').filter(r => r.trim().length > 0);
    const objEntries = rules.map(rule => {
      const [prop, ...valParts] = rule.split(':');
      if (!prop || valParts.length === 0) return '';
      const val = valParts.join(':').trim();
      const camelProp = prop.trim().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      return `"${camelProp}": "${val.replace(/"/g, '\\"')}"`;
    }).filter(Boolean);
    return `style={{ ${objEntries.join(', ')} }}`;
  });

  // Convert HTML comments <!-- ... --> to {/* ... */}
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  return jsx;
}

// Read landing_stitch.html
const landingHtml = fs.readFileSync('landing_stitch.html', 'utf8');

// Extract everything between <header>...</header> and <footer>...</footer>
const bodyMatch = landingHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.error('No body match');
  process.exit(1);
}

let bodyContent = bodyMatch[1];

// Strip out <header>...</header>
bodyContent = bodyContent.replace(/<header[\s\S]*?<\/header>/i, '');

// Strip out <footer>...</footer>
bodyContent = bodyContent.replace(/<footer[\s\S]*?<\/footer>/i, '');

// Strip out any <script>...</script>
bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');

console.log('Stripped landing body length:', bodyContent.length);

const landingJsx = htmlToJsx(bodyContent);
console.log('Landing JSX converted, length:', landingJsx.length);

fs.writeFileSync('landing_converted_test.jsx', landingJsx);
console.log('Wrote landing_converted_test.jsx');
