import Number_prototype_isNonNegative from './prototype/isNonNegative';

export default function(value) {
	return Number.isFinite(value) && Number_prototype_isNonNegative(value);
}
