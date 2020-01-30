export default function(h) {
	let {$scopedSlots} = this;
	return h(
		'div',
		{
			style: {
				display: 'flex',
				position: 'relative',
			},
		},
		$scopedSlots.default(),
	);
}
