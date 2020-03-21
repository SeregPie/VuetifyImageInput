import Array_is from './is';
import Array_prototype_isSingle from './prototype/isSingle';

export default function(value) {
	return Array_is(value) && Array_prototype_isSingle(value);
}
