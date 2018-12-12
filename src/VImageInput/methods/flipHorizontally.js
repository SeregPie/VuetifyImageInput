export default function() {
	if (this.rotated) {
		this.flippedVertically = !this.flippedVertically;
	} else {
		this.flippedHorizontally = !this.flippedHorizontally;
	}
	this.originLeft = 1 - this.originLeft;
}
