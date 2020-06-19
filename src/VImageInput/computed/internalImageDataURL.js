export default function() {
	let {internalImage} = this;
	return internalImage ? internalImage.src : null;
}
