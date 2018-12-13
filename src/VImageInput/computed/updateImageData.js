export default function() {
	let {
		backgroundColor,
		croppingLeft,
		croppingTop,
		scaling,
		debounce,
		flippedHorizontally,
		flippedVertically,
		imageFormat,
		imageHeight,
		imageQuality,
		imageWidth,
		internalImageData,
		internalImageHeight,
		internalImageWidth,
		rotated,
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
			context.translate(croppingLeft, croppingTop);
			context.scale(scaling, scaling);
			if (rotated) {
				context.translate(internalImageHeight, 0);
				context.rotate(Math.PI / 2);
			}
			if (flippedHorizontally) {
				context.translate(internalImageWidth, 0);
				context.scale(-1, 1);
			}
			if (flippedVertically) {
				context.translate(0, internalImageHeight);
				context.scale(1, -1);
			}
			context.drawImage(internalImage, 0, 0);
			if (flippedHorizontally) {
				context.translate(imageWidth, 0);
				context.scale(-1, 1);
			}
			if (flippedVertically) {
				context.translate(0, imageHeight);
				context.scale(1, -1);
			}
			imageData = canvas.toDataURL(`image/${imageFormat}`, imageQuality);
		} else {
			imageData = null;
		}
		this.imageData = imageData;
	}, debounce);
}
