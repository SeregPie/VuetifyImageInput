export default function(pixels) {
	if (this.flippedVertically) {
		pixels *= -1;
	}
	pixels /= this.zoom;
	this.translationHorizontally += pixels * Math.sin(this.rotationInRadians);
	this.translationVertically += pixels * Math.cos(this.rotationInRadians);
}
