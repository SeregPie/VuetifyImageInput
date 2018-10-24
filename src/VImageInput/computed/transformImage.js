export default function(
	internalImageData,
	internalImageWidth,
	internalImageHeight,
	rotated,
	flippedHorizontally,
	flippedVertically,
	scaling,
	cropLeft,
	cropTop,
	imageWidth,
	imageHeight,
	imageFormat,
	imageQuality,
) {
	let internalImage = new Image();
	internalImage.src = internalImageData;
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');
	canvas.width = imageWidth;
	canvas.height = imageHeight;
	if (rotated) {
		context.translate(imageHeight / 2, imageWidth / 2);
		context.rotate(Math.PI / 2);
		context.translate(-imageWidth / 2, -imageHeight / 2);
	}
	if (flippedHorizontally) {
		context.translate(imageWidth, 0);
		context.scale(-1, 1);
	}
	if (flippedVertically) {
		context.translate(0, imageHeight);
		context.scale(1, -1);
	}
	context.scale(scaling, scaling);
	//context.translate(-cropLeft, -cropTop);
	context.drawImage(internalImage, 0, 0);
	return canvas.toDataURL(`image/${imageFormat}`, imageQuality);
}
