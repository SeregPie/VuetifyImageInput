export default function(pixels) {
	if (this.flippedHorizontally) {
		pixels *= -1;
	}
	pixels /= this.zoom;
	this.translationHorizontally += pixels * Math.cos(this.rotationInRadians);
	this.translationVertically -= pixels * Math.sin(this.rotationInRadians);
}
