export default function() {
	let {
		rotateCounterclockwise,
		rotateCounterclockwiseIcon,
		rotateCounterclockwiseIconStyle,
		rotateCounterclockwiseText,
	} = this;
	return this.createActionButtonElement(
		rotateCounterclockwise,
		rotateCounterclockwiseIcon,
		rotateCounterclockwiseIconStyle,
		rotateCounterclockwiseText,
	);
}
