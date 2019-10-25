export default function(event) {
	event.preventDefault();
	let {$refs} = this;
	let {input} = $refs;
	if (input) {
		input.value = null;
		input.click();
	}
}
