import Array_is from './is';

export default function(value) {
	return Array_is(value) ? value : Array.from(value);
}
