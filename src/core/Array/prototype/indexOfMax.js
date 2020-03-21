export default function(that, iteratee) {
	let result = 0;
	if (iteratee) {
		that = that.map(iteratee);
	}
	that.reduce((r, n, i) => {
		if (n > r) {
			r = n;
			result = i;
		}
		return r;
	});
	return result;
}
