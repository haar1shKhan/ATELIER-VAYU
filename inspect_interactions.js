const fs = require('fs');

const jsx = fs.readFileSync('landing_converted_test.jsx', 'utf8');

const onClicks = jsx.match(/onclick="[^"]*"/gi) || [];
console.log('Onclicks in landing:', onClicks);

const links = jsx.match(/href="[^"]*"/gi) || [];
console.log('Unique links in landing:', Array.from(new Set(links)));

// Look for cart / bag references
const bagRef = jsx.match(/toggleCart\(\)|add-to-cart|cart/gi) || [];
console.log('Cart references in landing:', bagRef);
