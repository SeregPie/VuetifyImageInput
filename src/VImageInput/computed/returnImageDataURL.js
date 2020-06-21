export default function() {
	let {
		flippedHorizontally,
		flippedVertically,
		imageBackgroundColor,
		imageFormat,
		imageQuality,
		internalImage,
		internalImageWidth,
		internalImageHeight,
		overriddenImageHeight: imageHeight,
		overriddenImageWidth: imageWidth,
		rotationInRadians,
		translationHorizontally,
		translationVertically,
		zoom,
	} = this;
	return (() => {
		if (internalImage) {
			let timer = setTimeout(() => {
				let canvas = document.createElement('canvas');
				canvas.width = imageWidth;
				canvas.height = imageHeight;
				let context = canvas.getContext('2d');
				if (imageBackgroundColor) {
					context.fillStyle = imageBackgroundColor;
					context.fillRect(0, 0, imageWidth, imageHeight);
				}
				context.translate(imageWidth/2, imageHeight/2);
				context.translate(translationHorizontally, translationVertically);
				context.rotate(rotationInRadians);
				context.scale(
					flippedHorizontally ? -1 : 1,
					flippedVertically ? -1 : 1,
				);
				context.scale(zoom, zoom);
				context.drawImage(internalImage, -internalImageWidth/2, -internalImageHeight/2);
				let imageDataURL = canvas.toDataURL(`image/${imageFormat}`, imageQuality);
				this.resetCancellation();
				this.$emit('input', imageDataURL);
			}, 1000);
			this.cancelWith(() => {
				clearTimeout(timer);
			});
		} else {
			this.cancel();
			this.$emit('input', null);
		}
	});
}
