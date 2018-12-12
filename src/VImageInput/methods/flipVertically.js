export default function() {
	if (this.rotated) {
		this.flippedHorizontally = !this.flippedHorizontally;
	} else {
		this.flippedVertically = !this.flippedVertically;
	}
	this.originTop = 1 - this.originTop;
}
