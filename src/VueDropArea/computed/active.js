export default function() {
	let {dragging} = this;
	if (dragging) {
		let {disabled} = this;
		if (disabled) {
			return false;
		}
		return true;
	}
	return false;
}
