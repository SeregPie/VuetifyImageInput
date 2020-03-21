import String_is from './is';
import String_prototype_isNonEmpty from './prototype/isNonEmpty';

export default function(value) {
	return String_is(value) && String_prototype_isNonEmpty(value);
}
