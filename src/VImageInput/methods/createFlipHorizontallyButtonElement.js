export default function($createElement) {
	let {
		flipHorizontally,
		flipHorizontallyIcon,
		flipHorizontallyIconStyle,
		flipHorizontallyText,
	} = this;
	return this.createActionButtonElement(
		$createElement,
		flipHorizontally,
		flipHorizontallyIcon,
		flipHorizontallyIconStyle,
		flipHorizontallyText,
	);
}
