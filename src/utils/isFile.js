export default function(value) {
	let {File} = globalThis;
	return File && value instanceof File;
}
