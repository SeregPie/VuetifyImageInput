export default function(event) {
	let files = event.target.files;
	if (files) {
		this.uploadFiles(files);
	}
}
