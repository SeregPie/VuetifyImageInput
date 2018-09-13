export default function() {
	let {disabled} = this;
	if (!disabled) {
		let {$refs} = this;
		$refs.input.value = null;
		$refs.input.click();
	}
}
