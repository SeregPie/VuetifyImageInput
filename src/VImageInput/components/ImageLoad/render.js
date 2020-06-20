export default function(h, {
	data,
	parent,
}) {
	let {
		cancelIcon,
		disabled,
		errorIcon,
		loadError,
		loadFromFile,
		loading,
		loadProgress,
		loadSuccess,
		successIcon,
		uploadIcon,
	} = parent;
	let {key} = data;
	return h(
		'div',
		{
			style: {
				alignItems: 'center',
				borderRadius: '4px',
				borderStyle: 'dashed',
				borderWidth: '4px',
				bottom: 0,
				cursor: (disabled || loading ? undefined : 'pointer'),
				display: 'flex',
				justifyContent: 'center',
				left: 0,
				position: 'absolute',
				right: 0,
				top: 0,
			},
			on: {
				click(event) {
					event.preventDefault();
					event.stopPropagation();
					let input = document.createElement('input');
					input.setAttribute('type', 'file');
					input.addEventListener('change', event => {
						event.preventDefault();
						let {files} = event.target;
						if (files) {
							if (files.length) {
								loadFromFile(files[0]);
							}
						}
					});
					input.click();
				},
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
