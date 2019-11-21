export default function(event) {
	let {load} = this;
	event.preventDefault();
	let input = document.createElement('input');
	input.setAttribute('type', 'file');
	input.addEventListener('change', event => {
		event.preventDefault();
		let {files} = event.target;
		if (files) {
			if (files.length) {
				load(files[0]);
			}
		}
	});
	input.click();
}
