export default function(event) {
	this.croppingLeft += event.x - event.previousX;
	this.croppingTop += event.y - event.previousY;
}
