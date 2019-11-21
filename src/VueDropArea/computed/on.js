export default function() {
	let {disabled} = this;
	if (disabled) {
		return {};
	}
	let {
		onDragEnter,
		onDragLeave,
		onDragOver,
		onDrop,
	} = this;
	return {
		dragenter: onDragEnter,
		dragleave: onDragLeave,
		dragover: onDragOver,
		drop: onDrop,
	};
}
