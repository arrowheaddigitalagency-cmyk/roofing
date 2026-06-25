const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Add unoptimized prop if it doesn't have it
  const newContent = content.replace(/<Image([^>]+)>/g, (match, p1) => {
    if (!p1.includes('unoptimized')) {
      return "<Image unoptimized " + p1 + ">";
    }
    return match;
  });
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Fixed images in: ' + file);
  }
});
