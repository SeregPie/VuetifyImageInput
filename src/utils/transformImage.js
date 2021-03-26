export default function(image, {
	flippedHorizontally = false,
	flippedVertically = false,
	format,
	quality,
	width,
	height,
} = {}) {
	let canvas = document.createElement('canvas');
	let ctx = canvas.getContext('2d');
	canvas.width = width;
	canvas.height = height;
	ctx.translate(width/2, height/2);
	ctx.scale(
		flippedHorizontally ? -1 : 1,
		flippedVertically ? -1 : 1,
	);
	ctx.drawImage(image, -width/2, -height/2);
	return canvas.toDataURL(format, quality);
}
