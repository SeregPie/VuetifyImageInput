export default function(object, iteratee) {
	let result = {};
	Object.entries(object).forEach(([key, value]) => {
		result[iteratee(value, key, object)] = value;
	});
	return result;
}
