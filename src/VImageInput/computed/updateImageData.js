export default function() {
	let {
		croppingLeft,
		croppingTop,
		flippedHorizontally,
		flippedVertically,
		internalImageData,
		scaling,
		//rotated,
		backgroundColor,
		debounce,
		imageFormat,
		imageHeight,
		imageQuality,
		imageWidth,
	} = this;
	return setTimeout(() => {
		let imageData;
		if (internalImageData) {
			let internalImage = new Image();
			internalImage.src = internalImageData;
			let canvas = document.createElement('canvas');
			let context = canvas.getContext('2d');
			canvas.width = imageWidth;
			canvas.height = imageHeight;
			if (backgroundColor) {
				context.fillStyle = backgroundColor;
				context.fillRect(0, 0, imageWidth, imageHeight);
			}
			if (flippedHorizontally) {
				context.translate(imageWidth, 0);
				context.scale(-1, 1);
			}
			if (flippedVertically) {
				context.translate(0, imageHeight);
				context.scale(1, -1);
			}
			/*if (rotated) {
				context.translate(height, 0);
				context.rotate(Math.PI / 2);
			}*/
			context.translate(croppingLeft, croppingTop);
			context.scale(scaling, scaling);
			context.drawImage(internalImage, 0, 0);
			imageData = canvas.toDataURL(`image/${imageFormat}`, imageQuality);
		} else {
			imageData = null;
		}
		this.imageData = imageData;
	}, debounce);
}
