export default function(n) {
	return (n & (n - 1)) === 0 && n !== 0;
}
