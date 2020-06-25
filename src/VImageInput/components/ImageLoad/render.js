import cssFlexCenter from './css/FlexCenter';

export default function(h, {
	data,
	parent,
}) {
	let {
		cancelIcon,
		disabled,
		errorIcon,
		loadError,
		loading,
		loadProgress,
		loadSuccess,
		onClickToLoad,
		successIcon,
		uploadIcon,
	} = parent;
	let {
		key,
		style,
	} = data;
	return h(
		'div',
		{
			style: {
				...style,
				...cssFlexCenter,
				borderRadius: '4px',
				borderStyle: 'dashed',
				borderWidth: '4px',
				cursor: (disabled || loading ? undefined : 'pointer'),
			},
			on: {
				click: onClickToLoad,
			},
			key,
		},
		[h(
			'VSlideYTransition',
			{
				props: {
					leaveAbsolute: true,
				},
			},
			[(() => {
				if (loadSuccess) {
					return h(
						'VIcon',
						{
							props: {
								color: 'success',
								size: '64px',
							},
							key: 1,
						},
						successIcon,
					);
				}
				if (loadError) {
					return h(
						'VIcon',
						{
							props: {
								color: 'error',
								size: '64px',
							},
							key: 2,
						},
						errorIcon,
					);
				}
				if (loading) {
					return h(
						'VProgressCircular',
						{
							props: {
								color: 'primary',
								indeterminate: !loadProgress,
								rotate: -90,
								size: 128,
								value: loadProgress * 100,
								width: 16,
							},
						},
						[h(
							'VBtn',
							{
								props: {
									icon: true,
									large: true,
									text: true,
								},
								on: {
									click(event) {
										event.preventDefault();
										event.stopPropagation();
									},
								},
							},
							[h(
								'VIcon',
								cancelIcon,
							)],
						)],
					);
				}
				return h(
					'VIcon',
					{
						props: {
							size: '128px',
						},
						key: 0,
					},
					uploadIcon,
				);
			})()],
		)],
	);
}
