export default function() {
	let {
		__croppingLeft,
		__croppingTop,
		__flippedHorizontally,
		__flippedVertically,
		__internalImageData,
		__scaling,
		//__rotated,
		backgroundColor,
		debounce,
		imageFormat,
		imageHeight,
		imageQuality,
		imageWidth,
	} = this;
	return setTimeout(() => {
		let imageData;
		if (__internalImageData) {
			let internalImage = new Image();
			internalImage.src = __internalImageData;
			let canvas = document.createElement('canvas');
			let context = canvas.getContext('2d');
			canvas.width = imageWidth;
			canvas.height = imageHeight;
			if (backgroundColor) {
				context.fillStyle = backgroundColor;
				context.fillRect(0, 0, imageWidth, imageHeight);
			}
			if (__flippedHorizontally) {
				context.translate(imageWidth, 0);
				context.scale(-1, 1);
			}
			if (__flippedVertically) {
				context.translate(0, imageHeight);
				context.scale(1, -1);
			}
			/*if (rotated) {
				context.translate(height, 0);
				context.rotate(Math.PI / 2);
			}*/
			context.translate(__croppingLeft, __croppingTop);
			context.scale(__scaling, __scaling);
			context.drawImage(internalImage, 0, 0);
			imageData = canvas.toDataURL(`image/${imageFormat}`, imageQuality);
		} else {
			imageData = null;
		}
		this.__imageData = imageData;
	}, debounce);
}
