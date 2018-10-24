export default function() {
	if (this.rotated) {
		this.rotated = false;
	} else {
		this.rotated = true;
		this.flippedHorizontally = !this.flippedHorizontally;
		this.flippedVertically = !this.flippedVertically;
	}
}
