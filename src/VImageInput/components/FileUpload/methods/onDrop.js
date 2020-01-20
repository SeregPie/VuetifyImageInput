export default function(event) {
	event.preventDefault();
	this.dragEnter = false;
	let {disabled} = this;
	if (!disabled) {
		let {files} = event.dataTransfer;
		if (files) {
			if (files.length === 1) {
				this.$emit('load', files[0]);
			}
		}
	}
}
