export default function(...ns) {
	return ns.reduce((r, n) => r + n, 0);
}
