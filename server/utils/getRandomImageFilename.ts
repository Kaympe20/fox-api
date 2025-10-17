import { join } from 'path';
import { readdirSync, existsSync } from 'fs';

export function getImagesDirectory(): string {
	// Allow both dev and prod locations for images
	const possibleLocations = [
		join(process.cwd(), 'public', 'temp-images'),
		join(process.cwd(), '.output', 'public', 'temp-images')
	];

	const directory = possibleLocations.find((p) => existsSync(p));
	if (!directory) {
		throw new Error('temp-images directory not found. Ensure public/temp-images exists in the runtime image.');
	}
	return directory;
}

export function getRandomImageFilename(): string {
	const imagesDirectory = getImagesDirectory();
	const files = readdirSync(imagesDirectory);

	if (files.length === 0) {
        throw new Error('No images found');
    }

	return files[Math.floor(Math.random() * files.length)];
}
