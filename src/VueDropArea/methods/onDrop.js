export default function(event) {
	event.preventDefault();
	this.active = false;
	let {files} = event.dataTransfer;
	if (files) {
		if (files.length) {
			this.$emit('drop', files[0]);
		}
	}
}
