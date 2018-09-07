export default function() {
	let {
		$createElement,
		checkeredBackgroundImage,
		image,
		imageHeight,
		imageWidth,
	} = this;
	let elementOptions = {
		style: {
			backgroundImage: checkeredBackgroundImage,
			backgroundRepeat: 'repeat',
			backgroundSize: '16px 16px',
			height: `${imageHeight}px`,
			width: `${imageWidth}px`,
		},
	};
	let elementChildren = [];
	if (image) {
		Object.assign(elementOptions.style, {
			alignItems: 'center',
			display: 'flex',
			justifyContent: 'center',
		});
		let imageElement = $createElement(
			'img',
			{
				attrs: {
					src: image.toDataURL(),
				},
			},
		);
		elementChildren.push(imageElement);
	}
	return $createElement(
		'div',
		elementOptions,
		elementChildren,
	);
}
