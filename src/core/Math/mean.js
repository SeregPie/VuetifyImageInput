export default function(...ns) {
	let r = 0;
	let l = ns.length;
	let s = 0;
	ns.forEach(n => {
		let t = s + n;
		if (Number.MIN_SAFE_INTEGER < t && t < Number.MAX_SAFE_INTEGER) {
			s = t;
		} else {
			r += s / l;
			s = n;
		}
	});
	r += s / l;
	return r;
}
