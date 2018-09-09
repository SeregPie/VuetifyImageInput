export default function($createElement, image) {
	let {
		checkeredBackground,
		imageHeight,
		imageWidth,
	} = this;
	let elementChildren = [];
	if (image) {
		elementChildren.push(this.createImageElement($createElement, image));
	}
	return $createElement(
		'div',
		{
			style: {
				alignItems: 'center',
				background: checkeredBackground,
				display: 'flex',
				flexGrow: 1,
				justifyContent: 'center',
				minHeight: `${imageHeight}px`,
				minWidth: `${imageWidth}px`,
			},
		},
		elementChildren,
	);
}
