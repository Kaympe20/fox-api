import { getRandomImageFilename } from '../../utils/getRandomImageFilename';

export default defineEventHandler((event) => {
	return {
		url: `${useRuntimeConfig().url}/temp-images/${getRandomImageFilename()}`
	};
})