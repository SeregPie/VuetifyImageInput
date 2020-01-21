export default function(event) {
	event.preventDefault();
	event.stopPropagation();
	this.dragEnter = false;
	let {files} = event.dataTransfer;
	if (files) {
		if (files.length === 1) {
			this.$emit('load', files[0]);
		}
	}
}
