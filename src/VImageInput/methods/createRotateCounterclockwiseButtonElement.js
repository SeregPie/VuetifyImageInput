export default function($createElement) {
	let {
		rotateCounterclockwise,
		rotateCounterclockwiseIcon,
		rotateCounterclockwiseIconStyle,
		rotateCounterclockwiseText,
	} = this;
	return this.createActionButtonElement(
		$createElement,
		rotateCounterclockwise,
		rotateCounterclockwiseIcon,
		rotateCounterclockwiseIconStyle,
		rotateCounterclockwiseText,
	);
}
