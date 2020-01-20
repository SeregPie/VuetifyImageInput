export default function() {
	let {disabled} = this;
	if (disabled) {
		return false;
	}
	let {dragEnter} = this;
	if (dragEnter) {
		return true;
	}
	return false;
}
