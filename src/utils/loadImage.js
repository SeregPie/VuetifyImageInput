import sleep from './sleep';
import isString from './isString';

export default async function(value) {
	await sleep(1);
	if (isString(value)) {
		value = value.trim();
		if (value) {
			if (value !== 'data:,') {
				return {src: value};
			}
		}
	}
	return null;
}
