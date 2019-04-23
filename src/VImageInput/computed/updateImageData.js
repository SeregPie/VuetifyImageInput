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
		outputScale
	} = this;
	return setTimeout(() => {
		let imageData;
		if (internalImageData) {

			let internalImage = new Image();
			internalImage.src = internalImageData;
			let canvas = document.createElement('canvas');
			let context = canvas.getContext('2d');
			canvas.width = imageWidth * outputScale;
			canvas.height = imageHeight * outputScale;
			if (backgroundColor) {
				context.fillStyle = backgroundColor;
				context.fillRect(0, 0, imageWidth * outputScale, imageHeight * outputScale);
			}
			context.translate(croppingLeft * outputScale, croppingTop * outputScale);
			context.scale(scaling, scaling);
			if (rotated) {
				context.translate(internalImageHeight * outputScale, 0);
				context.rotate(Math.PI / 2);
			}
			if (flippedHorizontally) {
				context.translate(internalImageWidth * outputScale, 0);
				context.scale(-1, 1);
			}
			if (flippedVertically) {
				context.translate(0, internalImageHeight * outputScale);
				context.scale(1, -1);
			}
			context.drawImage(internalImage, 0, 0, internalImageWidth * outputScale, internalImageHeight * outputScale);
			if (flippedHorizontally) {
				context.translate(imageWidth * outputScale, 0);
				context.scale(-1, 1);
			}
			if (flippedVertically) {
				context.translate(0, imageHeight * outputScale);
				context.scale(1, -1);
			}
			imageData = canvas.toDataURL(`image/${imageFormat}`, imageQuality);
		} else {
			imageData = null;
		}
		this.imageData = imageData;
	}, debounce);
}
