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
				height: `${imageHeight}px`,
				justifyContent: 'center',
				width: `${imageWidth}px`,
			},
		},
		elementChildren,
	);
}
