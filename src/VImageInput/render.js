export default function(h) {
	let {
		fullHeight,
		fullWidth,
		failed,
		loaded,
		loading,
		progress,
	} = this;
	return h(
		'div',
		{
			style: {
				...(fullHeight ? {height: '100%'} : {}),
				...(fullWidth ? {width: '100%'} : {}),
			},
		},
		[
			h(
				'MyImageLoad',
				{
					style: {
						height: '100%',
						width: '100%',
					},
				},
			),
			h(
				'div',
				`failed: ${failed}`,
			),
			h(
				'div',
				`loaded: ${loaded}`,
			),
			h(
				'div',
				`loading: ${loading}`,
			),
			h(
				'div',
				`progress: ${progress}`,
			),
		],
	);
}
