export default function() {
	if (this.__rotated) {
		this.__rotated = false;
	} else {
		this.__rotated = true;
		this.__flippedHorizontally = !this.__flippedHorizontally;
		this.__flippedVertically = !this.__flippedVertically;
	}
}
