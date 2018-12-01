export default function() {
	if (this.rotated) {
		this.flippedHorizontally = !this.flippedHorizontally;
	} else {
		this.flippedVertically = !this.flippedVertically;
	}
}
