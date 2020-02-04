export default function() {
	let {
		$el,
		forcedHeight,
		forcedWidth,
		height,
		width,
	} = this;
	if ($el) {
		let {
			offsetHeight,
			offsetWidth,
		} = $el;
		if (offsetWidth < forcedWidth) {
			forcedWidth = width;
			forcedHeight = offsetWidth * height / width;
		} else
		if (offsetHeight < forcedHeight) {
			forcedHeight = height;
			forcedWidth = offsetHeight * width / height;
		} else {
			forcedWidth = width;
			forcedHeight = height;
		}
		let scaling = Math.min(
			offsetWidth / width,
			offsetHeight / height,
		);
		Object.assign(this, {
			forcedHeight,
			forcedWidth,
			scaling,
		});
	}
}
