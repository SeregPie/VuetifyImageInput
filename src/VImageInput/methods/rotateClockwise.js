export default function() {
	if (this.rotated) {
		this.rotated = false;
		this.flippedHorizontally = !this.flippedHorizontally;
		this.flippedVertically = !this.flippedVertically;
	} else {
		this.rotated = true;
	}
	let {originTop} = this;
	this.originTop = this.originLeft;
	this.originLeft = 1 - originTop;
}
