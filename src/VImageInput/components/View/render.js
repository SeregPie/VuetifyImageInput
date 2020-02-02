import checkeredBackground from '../../constants/checkeredBackground';

export default function(h, {
	data,
	parent,
}) {
	let {style} = data;
	let {
		imageHeight,
		imageWidth,
	} = parent;
	return h(
		'div',
		{
			style: {
				background: checkeredBackground,
				border: '1px solid #ccc',
				borderRadius: '4px',
				overflow: 'hidden',
				...style,
			},
		},
		[h(
			'div',
			{
				style: {
					border: '4px solid #fff',
					bottom: '50%',
					boxShadow: '0 0 4000px 4000px rgba(0,0,0,0.5)',
					height: `${imageHeight}px`,
					pointerEvents: 'none',
					position: 'absolute',
					right: '50%',
					transform: 'translate(50%,50%)',
					width: `${imageWidth}px`,
				},
			},
		)],
	);
}
