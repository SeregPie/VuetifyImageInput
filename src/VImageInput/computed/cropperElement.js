export default function() {
	let {
		$createElement,
		checkeredBackgroundImage,
		image,
		imageHeight,
		imageWidth,
	} = this;
	let cropperElementOptions = {
		style: {
			backgroundImage: checkeredBackgroundImage,
			backgroundRepeat: 'repeat',
			backgroundSize: '16px 16px',
			height: `${imageHeight}px`,
			width: `${imageWidth}px`,
		},
	};
	let cropperElementChildren = [];
	if (image) {
		Object.assign(cropperElementOptions.style, {
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
		cropperElementChildren.push(imageElement);
	}
	let cropperElement = $createElement(
		'div',
		cropperElementOptions,
		cropperElementChildren,
	);
	return cropperElement;
}
