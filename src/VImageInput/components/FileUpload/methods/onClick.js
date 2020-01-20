export default function(event) {
	event.preventDefault();
	let {disabled} = this;
	if (!disabled) {
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
}
