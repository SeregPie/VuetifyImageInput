export default function(set, otherSet) {
	let result = new Set(set);
	otherSet.forEach(value => {
		result.add(value);
	});
	return result;
}
