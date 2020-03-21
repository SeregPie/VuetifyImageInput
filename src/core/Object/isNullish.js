import Object_isNull from './isNull';
import Object_isUndefined from './isUndefined';

export default function(value) {
	return Object_isUndefined(value) || Object_isNull(value);
}
