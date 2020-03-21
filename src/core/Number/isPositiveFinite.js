import Number_prototype_isPositive from './prototype/isPositive';

export default function(value) {
	return Number.isFinite(value) && Number_prototype_isPositive(value);
}
