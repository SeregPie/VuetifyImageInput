export default function() {
	this.croppingTop = this.croppingBottom;
	if (this.rotated) {
		this.flippedHorizontally = !this.flippedHorizontally;
	} else {
		this.flippedVertically = !this.flippedVertically;
	}
}
