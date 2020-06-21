export default function(event) {
	this.translate(
		event.x - event.previousX,
		event.y - event.previousY,
	);
}
