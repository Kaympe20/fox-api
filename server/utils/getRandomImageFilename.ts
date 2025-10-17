import { join } from 'path';
import { readdirSync } from 'fs';

export function getRandomImageFilename(): string {
	const imagesDirectory = join(process.cwd(), 'public', 'temp-images');
	const files = readdirSync(imagesDirectory);

	if (files.length === 0) {
        throw new Error('No images found');
    }

	return files[Math.floor(Math.random() * files.length)];
}
