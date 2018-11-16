export default function() {
	if (this.__rotated) {
		this.__flippedHorizontally = !this.__flippedHorizontally;
	} else {
		this.__flippedVertically = !this.__flippedVertically;
	}
}
