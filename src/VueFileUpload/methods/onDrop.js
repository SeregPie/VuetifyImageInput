export default function(event) {
	event.preventDefault();
	this.dragging = false;
	let {files} = event.dataTransfer;
	if (files) {
		if (files.length) {
			this.load(files[0]);
		}
	}
}
