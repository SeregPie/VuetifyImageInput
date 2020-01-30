export default function(h) {
	let {$scopedSlots} = this;
	return h(
		'div',
		{
			style: {
				display: 'flex',
				minHeight: '100px',
				minWidth: '100px',
				position: 'relative',
			},
		},
		$scopedSlots.default(),
	);
}
