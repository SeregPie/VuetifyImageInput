export default function(event) {
	let movementX = event.x - event.previousX;
	let movementY = event.y - event.previousY;
	if (this.flippedHorizontally) {
		movementX *= -1;
	}
	if (this.flippedVertically) {
		movementY *= -1;
	}
	this.croppingLeft += movementX;
	this.croppingTop += movementY;
}
