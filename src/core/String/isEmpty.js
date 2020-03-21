import String_is from './is';
import String_prototype_isEmpty from './prototype/isEmpty';

export default function(value) {
	return String_is(value) && String_prototype_isEmpty(value);
}
