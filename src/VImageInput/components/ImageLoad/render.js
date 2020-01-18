export default function(h, {
	data,
	parent,
}) {
	let {
		disabled,
		errorIcon,
		errorIconStyle,
		loadError,
		load,
		loadSuccess,
		loading,
		loadProgress,
		successIcon,
		successIconStyle,
		uploadIcon,
		uploadIconStyle,
	} = parent;
	let {style} = data;
	return h(
		'div',
		{
			style: {
				...style,
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center',
			},
		},
		[h(
			'VFadeTransition',
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
							style: successIconStyle,
							props: {
								color: 'success',
								large: true,
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
							style: errorIconStyle,
							props: {
								color: 'error',
								large: true,
							},
							key: 2,
						},
						errorIcon,
					);
				}
				return h(
					'VBtn',
					{
						props: {
							disabled,
							icon: true,
							large: true,
							text: true,
						},
						on: {
							click(event) {
								event.preventDefault();
								let input = document.createElement('input');
								input.setAttribute('type', 'file');
								input.addEventListener('change', event => {
									event.preventDefault();
									let {files} = event.target;
									if (files) {
										if (files.length) {
											load(files[0]);
										}
									}
								});
								input.click();
							},
						},
						key: 0,
					},
					[h(
						'VIcon',
						{
							style: uploadIconStyle,
							props: {
								large: true,
							},
						},
						uploadIcon,
					)],
				);
			})()],
		)],
	);
}
