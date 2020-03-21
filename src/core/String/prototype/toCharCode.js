export default function(that) {
	let {length} = that;
	let array = new Uint8Array(length);
	for (let i = 0; i < length; i++) {
		array[i] = that.charCodeAt(i);
	}
	return array;
}
