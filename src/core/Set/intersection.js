export default function(set, otherSet) {
	let result = new Set();
	otherSet.forEach(value => {
		if (set.has(value)) {
			result.add(value);
		}
	});
	return result;
}
