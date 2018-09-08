export default function($createElement) {
	let {
		rotateClockwise,
		rotateClockwiseIcon,
		rotateClockwiseIconStyle,
		rotateClockwiseText,
	} = this;
	return this.createActionButtonElement(
		$createElement,
		rotateClockwise,
		rotateClockwiseIcon,
		rotateClockwiseIconStyle,
		rotateClockwiseText,
	);
}
