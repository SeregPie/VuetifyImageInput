export default function() {
	if (this.rotated) {
		this.rotated = false;
	} else {
		this.rotated = true;
		this.flippedHorizontally = !this.flippedHorizontally;
		this.flippedVertically = !this.flippedVertically;
	}
	let {dirtyOriginLeft} = this;
	this.dirtyOriginLeft = this.dirtyOriginTop;
	this.dirtyOriginTop = 1 - dirtyOriginLeft;
}
