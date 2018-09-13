export default function(event) {
	event.preventDefault();
	if (!this.disabled) {
		let files = event.dataTransfer.files;
		if (files) {
			this.uploadFiles(files);
		}
	}
}
