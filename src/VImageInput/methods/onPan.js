export default function(data, event) {
	let {movementX, movementY} = event.originalEvent;
	if (this.flippedHorizontally) {
		movementX *= -1;
	}
	if (this.flippedVertically) {
		movementY *= -1;
	}
	this.croppingLeft += movementX;
	this.croppingTop += movementY;
}
