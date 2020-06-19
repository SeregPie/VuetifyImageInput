import MyImage from '../Image';

export default function(h, {parent}) {
	let {
		overriddenImageHeight: imageHeight,
		overriddenImageWidth: imageWidth,
	} = parent;
	return h(
		'div',
		{
			style: {
				bottom: 0,
				left: 0,
				overflow: 'hidden',
				position: 'absolute',
				right: 0,
				top: 0,
			},
		},
		[
			h(
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
			),
			h(
				'div',
				{
					style: {
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
			),
		],
	);
}
