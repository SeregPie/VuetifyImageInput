export default function() {
	let {
		rotateClockwise,
		rotateClockwiseIcon,
		rotateClockwiseIconStyle,
		rotateClockwiseText,
	} = this;
	return this.createActionButtonElement(
		rotateClockwise,
		rotateClockwiseIcon,
		rotateClockwiseIconStyle,
		rotateClockwiseText,
	);
}
