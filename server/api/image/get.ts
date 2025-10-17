import { getRandomImageFilename } from '../../utils/getRandomImageFilename';
import { join } from 'path';
import { readFileSync } from 'fs';

export default defineEventHandler((event) => {
    const filename = getRandomImageFilename();
    const imagePath = join(process.cwd(), 'public', 'temp-images', filename);
    const imageBuffer = readFileSync(imagePath);
    
    const ext = filename.split('.').slice(-1)[0].toLowerCase();
    let contentType = 'jpeg';
    if (ext === 'png') contentType = 'png';
    else if (ext === 'gif') contentType = 'gif';
    else if (ext === 'webp') contentType = 'webp';
    else if (ext === 'ico') contentType = 'x-icon';

    setResponseHeader(event, 'Content-Type', `image/${contentType}`);
    
    return imageBuffer;
});
