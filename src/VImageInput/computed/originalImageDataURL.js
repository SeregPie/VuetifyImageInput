export default function() {
	let {originalImage} = this;
	return originalImage ? originalImage.src : null;
}
