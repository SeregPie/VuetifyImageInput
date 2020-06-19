export default function() {
	let {internalImage} = this;
	return internalImage ? internalImage.naturalWidth : 0;
}
