export default function() {
	this.croppingLeft = this.croppingRight;
	if (this.rotated) {
		this.flippedVertically = !this.flippedVertically;
	} else {
		this.flippedHorizontally = !this.flippedHorizontally;
	}
}
