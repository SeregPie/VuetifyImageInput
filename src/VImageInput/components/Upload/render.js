export default function(h, {
	data,
}) {
	let {style} = data;
	return h(
		'div',
		{
			style: {
				border: '4px dashed #ccc',
				borderRadius: '4px',
				...style,
			},
		},
	);
}
