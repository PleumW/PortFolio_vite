const fs = require('fs');
const https = require('https');
const path = require('path');

const photoFile = path.join(__dirname, '../src/components/Photo.jsx');
const galleryDir = path.join(__dirname, '../public/gallery');

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

let content = fs.readFileSync(photoFile, 'utf8');

const regex = /id:\s*(\d+),\s*src:\s*"(https:\/\/[^"]+)"/g;
let match;
const downloads = [];

while ((match = regex.exec(content)) !== null) {
  const id = match[1];
  const url = match[2];
  const localSrc = `/gallery/photo_${id}.jpg`;
  const destPath = path.join(galleryDir, `photo_${id}.jpg`);
  
  // Replace in content
  content = content.replace(url, localSrc);
  
  downloads.push(new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded photo_${id}.jpg`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      console.error(`Error downloading photo_${id}.jpg:`, err.message);
      reject(err);
    });
  }));
}

fs.writeFileSync(photoFile, content, 'utf8');
console.log('Updated Photo.jsx paths.');

Promise.all(downloads).then(() => {
  console.log('All downloads finished successfully!');
}).catch((err) => {
  console.error('Some downloads failed:', err);
});
