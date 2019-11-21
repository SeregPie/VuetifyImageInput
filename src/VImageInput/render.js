export default function(h) {
	let {
		fullHeight,
		fullWidth,
	} = this;
	return h(
		'MyImageLoad',
		{
			style: {
				...(fullHeight ? {height: '100%'} : {}),
				...(fullWidth ? {width: '100%'} : {}),
			},
		},
	);
}
