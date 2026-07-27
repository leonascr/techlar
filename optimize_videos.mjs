import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import path from 'path';
import fs from 'fs';

ffmpeg.setFfmpegPath(ffmpegPath);

const videos = [
  path.join(process.cwd(), 'public/assets/projetos/20220526_104821.mp4'),
  path.join(process.cwd(), 'public/assets/videos/videosection.mp4')
];

function compressVideo(filePath) {
  return new Promise((resolve, reject) => {
    const tempPath = filePath.replace('.mp4', '_compressed.mp4');
    
    console.log(`Starting compression for: ${path.basename(filePath)}`);
    
    ffmpeg(filePath)
      .outputOptions([
        '-vcodec libx264',
        '-crf 28', // Good balance between size and quality
        '-preset medium',
        '-b:v 1M', // target bitrate 1 Mbps
        '-maxrate 1M',
        '-bufsize 2M',
        '-c:a aac',
        '-b:a 128k',
        '-movflags +faststart'
      ])
      .size('1280x?') // scale to 720p to save space
      .on('end', () => {
        fs.renameSync(tempPath, filePath);
        console.log(`✅ Finished compressing: ${path.basename(filePath)}`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`❌ Error compressing ${filePath}:`, err);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        reject(err);
      })
      .save(tempPath);
  });
}

async function main() {
  for (const video of videos) {
    if (fs.existsSync(video)) {
      await compressVideo(video);
    } else {
      console.log(`⚠️ Video not found: ${video}`);
    }
  }
  console.log('All videos compressed!');
}

main();
