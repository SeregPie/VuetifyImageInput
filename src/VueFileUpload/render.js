export default function(h) {
	let {
		$scopedSlots,
		cancel,
		dragging,
		error,
		failed,
		file,
		loaded,
		loading,
		onChange,
		onClick,
		onDragEnter,
		onDragLeave,
		onDragOver,
		onDrop,
		progress,
		result,
	} = this;
	return h(
		'div',
		[
			h(
				'input',
				{
					style: {
						display: 'none',
					},
					attrs: {
						type: 'file',
					},
					on: {
						change: onChange,
					},
					ref: 'input',
				},
			),
			$scopedSlots.default({
				cancel,
				dragging,
				error,
				failed,
				file,
				loaded,
				loading,
				onClick,
				onDragEnter,
				onDragLeave,
				onDragOver,
				onDrop,
				progress,
				result,
			}),
		],
	);
}
