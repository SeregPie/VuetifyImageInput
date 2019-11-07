export default function(event) {
	event.preventDefault();
	let input = document.createElement('input');
	input.setAttribute('type', 'file');
	let {onChange} = this;
	input.addEventListener('change', onChange);
	input.click();
}
