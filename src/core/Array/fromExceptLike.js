import Array_isLike from './isLike';

export default function(value) {
	return Array_isLike(value) ? value : Array.from(value);
}
