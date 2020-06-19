import MyImage from '../Image';

export default function(h) {
	return h(
		'div',
		{
			style: {
				bottom: 0,
				left: 0,
				position: 'absolute',
				right: 0,
				top: 0,
			},
		},
		[h(
			'div',
			{
				style: {
					bottom: '50%',
					position: 'absolute',
					right: '50%',
					transform: 'translate(50%,50%)',
				},
			},
			[h(MyImage)],
		)],
	);
}
