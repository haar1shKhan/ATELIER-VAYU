const fs = require('fs');

const landingHtml = fs.readFileSync('landing_stitch.html', 'utf8');

// Extract the main content between </header> and <footer
const startIdx = landingHtml.indexOf('</header>');
const endIdx = landingHtml.indexOf('<footer');

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find header or footer bounds in landing_stitch.html');
  process.exit(1);
}

let mainHtml = landingHtml.slice(startIdx + 9, endIdx);

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
  
  // Replace stroke attributes
  jsx = jsx.replace(/stroke-width="/g, 'strokeWidth="');
  jsx = jsx.replace(/stroke-linecap="/g, 'strokeLinecap="');
  jsx = jsx.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
  
  // Void tags self-closing: img, input, hr, br
  jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/gi, '<img$1 />');
  jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />');
  jsx = jsx.replace(/<br\s*>/gi, '<br />');
  jsx = jsx.replace(/<hr([^>]*?)(?<!\/)>/gi, '<hr$1 />');

  // Convert inline style strings
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

let jsxContent = htmlToJsx(mainHtml);

// Enhance interactive links and buttons:
// 1. Replace onclick="addToBag('Ivory Silk Asymmetric Bandhgala', ...)" with React handler
jsxContent = jsxContent.replace(
  /onclick="addToBag\('Ivory Silk Asymmetric Bandhgala',\s*'\$2,450',\s*'Menswear Occasion'\)"/g,
  `onClick={() => addToCart({ id: 'ivory-silk-asymmetric-bandhgala', name: 'The Ivory Silk Asymmetric Bandhgala', edition: 'Edition // No. VII - 04', price: 84000, formattedPrice: '₹ 84,000', image: 'https://lh3.googleusercontent.com/aida/AOf_eG6zB01G100rF03mB9L41X6bNqJvQy19nE5R3mS8=s1600', size: '40R', colorway: 'Ivory Sand' })}`
);

jsxContent = jsxContent.replace(
  /onclick="addToBag\('Sculpted Crimson Zardozi Lehenga',\s*'\$3,800',\s*'Bridal &amp; Couture'\)"/g,
  `onClick={() => addToCart({ id: 'sculpted-crimson-zardozi-lehenga', name: 'The Sculpted Crimson Zardozi Lehenga', edition: 'Edition // No. VII - 01', price: 145000, formattedPrice: '₹ 1,45,000', image: 'https://lh3.googleusercontent.com/aida/AOf_eG674fJ9w94oY_l2oW0h5W7vA1Lg5p9X4K1h=s1600', size: '38R', colorway: 'Crimson Vermilion' })}`
);

jsxContent = jsxContent.replace(
  /onclick="addToBag\('Sandstone Raw Silk Structured Bandhgala',\s*'\$1,850',\s*'Menswear Bespoke'\)"/g,
  `onClick={() => addToCart({ id: 'sandstone-raw-silk-bandhgala', name: 'Sandstone Raw Silk Structured Bandhgala', edition: 'Edition // No. VII - 06', price: 76000, formattedPrice: '₹ 76,000', image: 'https://lh3.googleusercontent.com/aida/AOf_eG6zB01G100rF03mB9L41X6bNqJvQy19nE5R3mS8=s1600', size: '42R', colorway: 'Sandstone Gold' })}`
);

jsxContent = jsxContent.replace(
  /onclick="addToBag\('Banarasi Tissue Corset Saree',\s*'\$2,650',\s*'Womenswear Occasion'\)"/g,
  `onClick={() => addToCart({ id: 'banarasi-tissue-corset-saree', name: 'Banarasi Tissue Corset Saree', edition: 'Edition // No. VII - 08', price: 98000, formattedPrice: '₹ 98,000', image: 'https://lh3.googleusercontent.com/aida/AOf_eG5R8c3H3mY3JkL0p6uO1jY7kQ3mZ=s1600', size: 'Custom Drape', colorway: 'Antique Zari' })}`
);

jsxContent = jsxContent.replace(
  /onclick="addToBag\('Layered Raw Silk Angrakha',\s*'\$1,650',\s*'Menswear Occasion'\)"/g,
  `onClick={() => addToCart({ id: 'layered-raw-silk-angrakha', name: 'Layered Raw Silk Angrakha', edition: 'Edition // No. VII - 09', price: 68000, formattedPrice: '₹ 68,000', image: 'https://lh3.googleusercontent.com/aida/AOf_eG4o1qH7l3R1s9P2b=s1600', size: '40R', colorway: 'Nocturne Black' })}`
);

// Any leftover onclick="addToBag(...)"
jsxContent = jsxContent.replace(/onclick="addToBag\([^)]*\)"/g, `onClick={() => openCart()}`);

// Replace "EXPLORE CEREMONIAL ARCHIVE" or collection links
jsxContent = jsxContent.replace(
  /<a([^>]*?)href="#collection"([^>]*?)>([\s\S]*?)<\/a>/g,
  '<Link$1href="/shop"$2>$3</Link>'
);

// Link to PDP for the Ivory Silk Asymmetric Bandhgala
jsxContent = jsxContent.replace(
  /href="#pdp-bandhgala"/g,
  'href="/shop/ivory-silk-asymmetric-bandhgala"'
);

// Private Atelier Consultation buttons trigger salon modal
jsxContent = jsxContent.replace(
  /<a([^>]*?)href="#bespoke"([^>]*?)>([\s\S]*?)<\/a>/g,
  '<button$1onClick={() => openSalonModal()}$2>$3</button>'
);

const finalPageTsx = `"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function HomePage() {
  const { addToCart, openCart, openSalonModal } = useCart();

  return (
    <div className="w-full">
      ${jsxContent}
    </div>
  );
}
`;

fs.writeFileSync('app/page.tsx', finalPageTsx);
console.log('Successfully wrote app/page.tsx from landing_stitch.html');
