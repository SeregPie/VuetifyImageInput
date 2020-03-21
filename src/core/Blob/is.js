export default function(value) {
	let {Blob} = globalThis;
	return !!Blob && value instanceof Blob;
}
