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
      if (file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let idCounter = 1;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace all unsplash URLs
  const newContent = content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?([^"']+)?/g, (match) => {
    return "https://loremflickr.com/1920/1080/roof,house?lock=" + (idCounter++);
  });
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Replaced images in: ' + file);
  }
});
