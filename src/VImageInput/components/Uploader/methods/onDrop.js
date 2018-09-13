export default function(event) {
	event.preventDefault();
	let {disabled} = this;
	if (!disabled) {
		let files = event.dataTransfer.files;
		if (files) {
			this.uploadFiles(files);
		}
	}
}
