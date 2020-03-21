import Number_is from './is';
import Number_prototype_isBetween from './prototype/isBetween';

export default function(value, ...args) {
	return Number_is(value) && Number_prototype_isBetween(value, ...args);
}
