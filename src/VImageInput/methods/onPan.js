export default function(event) {
	let movementX = event.x - event.previousX;
	let movementY = event.y - event.previousY;
	this.croppingLeft += movementX;
	this.croppingTop += movementY;
}
