export default function() {
	let {
		flipHorizontally,
		flipHorizontallyIcon,
		flipHorizontallyIconStyle,
		flipHorizontallyText,
	} = this;
	return this.createActionButtonElement(
		flipHorizontally,
		flipHorizontallyIcon,
		flipHorizontallyIconStyle,
		flipHorizontallyText,
	);
}
