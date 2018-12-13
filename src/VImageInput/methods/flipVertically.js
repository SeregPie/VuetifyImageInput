export default function() {
	if (this.rotated) {
		this.flippedHorizontally = !this.flippedHorizontally;
	} else {
		this.flippedVertically = !this.flippedVertically;
	}
	this.dirtyOriginTop = 1 - this.dirtyOriginTop;
}
