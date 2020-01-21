export default function(event) {
	event.preventDefault();
	event.stopPropagation();
	let input = document.createElement('input');
	input.setAttribute('type', 'file');
	input.addEventListener('change', event => {
		event.preventDefault();
		let {files} = event.target;
		if (files) {
			if (files.length) {
				this.$emit('load', files[0]);
			}
		}
	});
	input.click();
}
