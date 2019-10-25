export default function(event) {
	event.preventDefault();
	let {files} = event.target;
	if (files) {
		if (files.length) {
			this.load(files[0]);
		}
	}
}
