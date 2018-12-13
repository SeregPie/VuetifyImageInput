export default function() {
	if (this.rotated) {
		this.rotated = false;
		this.flippedHorizontally = !this.flippedHorizontally;
		this.flippedVertically = !this.flippedVertically;
	} else {
		this.rotated = true;
	}
	let {dirtyOriginTop} = this;
	this.dirtyOriginTop = this.dirtyOriginLeft;
	this.dirtyOriginLeft = 1 - dirtyOriginTop;
}
