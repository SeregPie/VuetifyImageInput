import Number_isNonNegativeSafeInteger from '../Number/isNonNegativeSafeInteger';

export default function(value) {
	return value && Number_isNonNegativeSafeInteger(value.length);
}
