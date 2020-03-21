export default function(value) {
	let {Buffer} = globalThis;
	return !!Buffer && value instanceof Buffer;
}
