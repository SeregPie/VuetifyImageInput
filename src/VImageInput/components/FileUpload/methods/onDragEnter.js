export default function(event) {
	event.preventDefault();
	event.stopPropagation();
	this.dragEnter = true;
}
