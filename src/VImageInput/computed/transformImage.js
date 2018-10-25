export default function(
	originalData,
	originalWidth,
	originalHeight,
	rotated,
	flippedHorizontally,
	flippedVertically,
	scaling,
	croppingLeft,
	croppingTop,
	backgroundColor,
	width,
	height,
	format,
	quality,
) {
	let originalImage = new Image();
	originalImage.src = originalData;
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');
	canvas.width = width;
	canvas.height = height;
	if (backgroundColor) {
		context.fillStyle = backgroundColor;
		context.fillRect(0, 0, width, height);
	}
	if (flippedHorizontally) {
		context.translate(width, 0);
		context.scale(-1, 1);
	}
	if (flippedVertically) {
		context.translate(0, height);
		context.scale(1, -1);
	}
	/*if (rotated) {
		context.translate(height, 0);
		context.rotate(Math.PI / 2);
	}*/
	context.translate(croppingLeft, croppingTop);
	context.scale(scaling, scaling);
	context.drawImage(originalImage, 0, 0);
	return canvas.toDataURL(`image/${format}`, quality);
}
