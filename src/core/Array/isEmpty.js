import Array_is from './is';
import Array_prototype_isEmpty from './prototype/isEmpty';

export default function(value) {
	return Array_is(value) && Array_prototype_isEmpty(value);
}
