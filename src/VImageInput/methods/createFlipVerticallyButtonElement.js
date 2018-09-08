export default function($createElement) {
	let {
		flipVertically,
		flipVerticallyIcon,
		flipVerticallyIconStyle,
		flipVerticallyText,
	} = this;
	return this.createActionButtonElement(
		$createElement,
		flipVertically,
		flipVerticallyIcon,
		flipVerticallyIconStyle,
		flipVerticallyText,
	);
}
