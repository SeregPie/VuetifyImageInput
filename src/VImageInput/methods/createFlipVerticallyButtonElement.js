export default function() {
	let {
		flipVertically,
		flipVerticallyIcon,
		flipVerticallyIconStyle,
		flipVerticallyText,
	} = this;
	return this.createActionButtonElement(
		flipVertically,
		flipVerticallyIcon,
		flipVerticallyIconStyle,
		flipVerticallyText,
	);
}
