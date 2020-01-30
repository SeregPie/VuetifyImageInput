export default function(h) {
	let {
		fullHeight,
		fullWidth,
		image,
	} = this;
	return h(
		'MyResponsive',
		{
			style: {
				...(fullHeight ? {height: '100%'} : {}),
				...(fullWidth ? {width: '100%'} : {}),
			},
		},
		[h(
			'VFadeTransition',
			{
				props: {
					leaveAbsolute: true,
				},
			},
			[image ? h('MyEdit') : h('MyLoad')],
		)],
	);
}
