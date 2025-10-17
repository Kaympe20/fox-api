import { getRandomImageFilename } from '../../utils/getRandomImageFilename';

export default defineEventHandler((event) => {	
	return {
		url: `${process.env.URL}/temp-images/${getRandomImageFilename()}`
	};
})