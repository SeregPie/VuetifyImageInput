export default function() {
	let {internalImage} = this;
	return internalImage ? internalImage.naturalHeight : 0;
}
