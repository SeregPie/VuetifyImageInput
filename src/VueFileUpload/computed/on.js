export default function() {
	let {disabled} = this;
	if (disabled) {
		return {};
	}
	let {
		onClick,
		onDragEnter,
		onDragLeave,
		onDragOver,
		onDrop,
	} = this;
	return {
		click: onClick,
		dragenter: onDragEnter,
		dragleave: onDragLeave,
		dragover: onDragOver,
		drop: onDrop,
	};
}
