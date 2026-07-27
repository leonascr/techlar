import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = path.join(process.cwd(), 'public', 'assets');

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    return;
  }

  const tempPath = `${filePath}.tmp${ext}`;

  try {
    const buffer = fs.readFileSync(filePath);
    let s = sharp(buffer);
    
    // Resize if width > 1920 to save even more space (optional, but good for web)
    const metadata = await s.metadata();
    if (metadata.width > 1920) {
      s = s.resize({ width: 1920, withoutEnlargement: true });
    }

    if (ext === '.jpg' || ext === '.jpeg') {
      await s.jpeg({ quality: 75, mozjpeg: true }).toFile(tempPath);
    } else if (ext === '.png') {
      await s.png({ quality: 75, compressionLevel: 8 }).toFile(tempPath);
    } else if (ext === '.webp') {
      await s.webp({ quality: 75 }).toFile(tempPath);
    }
    
    const originalSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(tempPath).size;

    // Only overwrite if it actually saved space
    if (newSize < originalSize) {
      fs.renameSync(tempPath, filePath);
      console.log(`✅ Optimized: ${path.basename(filePath)} (${(originalSize / 1024 / 1024).toFixed(2)} MB -> ${(newSize / 1024 / 1024).toFixed(2)} MB)`);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`⏭️ Skipped: ${path.basename(filePath)} (already optimized)`);
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      await optimizeImage(fullPath);
    }
  }
}

async function main() {
  console.log('Starting optimization of public/assets...');
  await processDirectory(directoryPath);
  console.log('Done optimizing images!');
}

main();
