export default function() {
	let {
		$scopedSlots,
		active,
		onClick,
		onDragEnter,
		onDragLeave,
		onDragOver,
		onDrop,
		onMouseEnter,
		onMouseLeave,
	} = this;
	return $scopedSlots.default({
		active,
		onClick,
		onDragEnter,
		onDragLeave,
		onDragOver,
		onDrop,
		onMouseEnter,
		onMouseLeave,
	});
}
