export default function() {
	if (this.__rotated) {
		this.__flippedVertically = !this.__flippedVertically;
	} else {
		this.__flippedHorizontally = !this.__flippedHorizontally;
	}
}
