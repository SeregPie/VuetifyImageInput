export default function() {
	if (this.__rotated) {
		this.__rotated = false;
		this.__flippedHorizontally = !this.__flippedHorizontally;
		this.__flippedVertically = !this.__flippedVertically;
	} else {
		this.__rotated = true;
	}
}
