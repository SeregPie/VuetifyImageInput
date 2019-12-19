export default function(event) {
	event.preventDefault();
	this.active = false;
	let {files} = event.dataTransfer;
	if (files) {
		if (files.length === 1) {
			this.$emit('drop', files[0]);
		}
	}
}
