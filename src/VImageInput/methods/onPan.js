export default function(event) {
	let movementX = event.x - event.previousX;
	let movementY = event.y - event.previousY;
	if (this.__flippedHorizontally) {
		movementX *= -1;
	}
	if (this.__flippedVertically) {
		movementY *= -1;
	}
	this.__croppingLeft += movementX;
	this.__croppingTop += movementY;
}
