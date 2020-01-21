export default function() {
	let {originalImage} = this;
	return originalImage ? originalImage.naturalWidth : 0;
}
