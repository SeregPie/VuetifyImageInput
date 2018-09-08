export default function($createElement, image) {
	let {
		checkeredBackgroundImage,
		imageHeight,
		imageWidth,
	} = this;
	let imageTransitonElementChildren = [];
	if (image) {
		imageTransitonElementChildren.push(this.createImageElement($createElement, image));
	}
	return $createElement(
		'div',
		{
			style: {
				alignItems: 'center',
				backgroundImage: checkeredBackgroundImage,
				backgroundRepeat: 'repeat',
				backgroundSize: '16px 16px',
				display: 'flex',
				height: `${imageHeight}px`,
				justifyContent: 'center',
				width: `${imageWidth}px`,
			},
		},
		[$createElement(
			'v-fade-transition',
			imageTransitonElementChildren,
		)],
	);
}
