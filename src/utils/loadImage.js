import isFile from './isFile';
import isString from './isString';

async function loadFromString(string) {
	let image = new Image();
	image.src = string;
	await image.decode();
	return image;
}

async function loadFromFile(file, signal) {
	let reader = new FileReader();
	let promise = (new Promise((resolve, reject) => {
		reader.addEventListener('load', resolve);
		reader.addEventListener('abort', reject);
		reader.addEventListener('error', reject);
	}));
	reader.readAsDataURL(file);
	signal.onabort = (() => {
		reader.abort();
	});
	await promise;
	signal.onabort = null;
	let url = reader.result;
	return loadFromString(url, signal);
}

export default async function(value, signal) {
	if (isString(value)) {
		return loadFromString(value, signal);
	}
	if (isFile(value)) {
		return loadFromFile(value, signal);
	}
	throw new Error();
}
