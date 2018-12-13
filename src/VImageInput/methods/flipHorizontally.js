export default function() {
	if (this.rotated) {
		this.flippedVertically = !this.flippedVertically;
	} else {
		this.flippedHorizontally = !this.flippedHorizontally;
	}
	this.dirtyOriginLeft = 1 - this.dirtyOriginLeft;
}
