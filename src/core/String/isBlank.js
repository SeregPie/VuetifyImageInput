import String_is from './is';
import String_prototype_isBlank from './prototype/isBlank';

export default function(value) {
	return String_is(value) && String_prototype_isBlank(value);
}
