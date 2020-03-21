let n = 624;

export default function(seed) {
	let a = [seed];
	for (let i = 1; i < n; i++) {
		a[i] = 0x6C078965 * (a[i - 1] ^ (a[i - 1] >> 30)) + i;
	}
	let i = 0;
	return (() => {
		if (!i) {
			for (let i = 0; i < n; i++) {
				let x = (a[i] & 0x80000000) + (a[(i + 1) % n] & 0x7FFFFFFF);
				let y = x >> 1;
				if (x % 2) {
					y ^= 0x9908B0DF;
				}
				a[i] = a[(i + 397) % n] ^ y;
			}
		}
		let x = a[i];
		x ^= x >> 11;
		x ^= (x << 7) & 0x9D2C5680;
		x ^= (x << 15) & 0xEFC60000;
		x ^= x >> 18;
		i = (i + 1) % n;
		return x / 0x80000001;
	});
}
