import Object_hasOwn from './hasOwn';

export default function(object) {
	for (let key in object) {
		if (Object_hasOwn(object, key)) {
			return false;
		}
	}
	return true;
}
