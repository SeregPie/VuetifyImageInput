export default function(pixels) {
	if (this.flippedHorizontally) {
		pixels *= -1;
	}
	pixels /= this.zoom;
	this.translationHorizontally += pixels * Math.cos(this.rotationRadians);
	this.translationVertically -= pixels * Math.sin(this.rotationRadians);
}
