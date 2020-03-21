import Promise_is from './is';

export default function(value) {
	return Promise_is(value) ? value : Promise.resolve(value);
}
