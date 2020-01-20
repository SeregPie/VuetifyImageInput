export default function(h) {
	let {
		fullHeight,
		fullWidth,
		loadError,
		loadSuccess,
		loading,
		loadProgress,
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
				'MyImageUpload',
				{
					style: {
						height: '100%',
						width: '100%',
					},
				},
			),
			h(
				'div',
				`loadError: ${loadError}`,
			),
			h(
				'div',
				`loadSuccess: ${loadSuccess}`,
			),
			h(
				'div',
				`loading: ${loading}`,
			),
			h(
				'div',
				`loadProgress: ${loadProgress}`,
			),
		],
	);
}
