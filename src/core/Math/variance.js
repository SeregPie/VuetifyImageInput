import Math_mean from './mean';

export default function(...ns) {
	let m = Math_mean(...ns);
	return Math_mean(...ns.map(n => Math.pow(n - m, 2)));
}
