import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgPath = path.resolve('public/favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

async function generate() {
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'favicon-512x512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'favicon.png', size: 96 },
  ];

  for (const item of sizes) {
    const outPath = path.resolve('public', item.name);
    await sharp(svgBuffer)
      .resize(item.size, item.size)
      .png()
      .toFile(outPath);
    console.log(`Generated: ${item.name} (${item.size}x${item.size})`);
  }

  // Also create a 48x48 favicon.ico directly at root
  const icoPath = path.resolve('public/favicon.ico');
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(icoPath);
  console.log('Generated: favicon.ico (48x48 PNG-based ICO)');
}

generate().catch(console.error);
