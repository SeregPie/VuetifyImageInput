export default function() {
	let {originalImage} = this;
	return originalImage ? originalImage.naturalHeight : 0;
}
