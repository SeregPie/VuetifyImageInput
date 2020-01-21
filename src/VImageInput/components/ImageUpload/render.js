export default function(h, {
	data,
	parent,
}) {
	let {
		cancelIcon,
		cancelIconStyle,
		cancelLoad,
		disabled,
		errorIcon,
		errorIconStyle,
		load,
		loadError,
		loading,
		loadProgress,
		loadSuccess,
		successIcon,
		successIconStyle,
		uploadIcon,
		uploadIconStyle,
	} = parent;
	let {style} = data;
	return h(
		'MyFileUpload',
		{
			props: {
				disabled: disabled || loading,
			},
			on: {
				load,
			},
			scopedSlots: {
				default({
					active,
					onClick,
					onDragEnter,
					onDragLeave,
					onDragOver,
					onDrop,
				}) {
					return h(
						'VCard',
						{
							style: {
								alignItems: 'center',
								display: 'flex',
								justifyContent: 'center',
								position: 'relative',
								...style,
							},
							props: {
								disabled,
								outlined: true,
							},
							on: {
								click: onClick,
								dragenter: onDragEnter,
								dragleave: onDragLeave,
								dragover: onDragOver,
								drop: onDrop,
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
								if (loading) {
									let value = loadProgress * 100;
									let indeterminate = !value;
									return h(
										'VProgressCircular',
										{
											props: {
												color: 'primary',
												indeterminate,
												rotate: -90,
												size: 64,
												value,
												width: 4,
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
													click: cancelLoad,
												},
											},
											[h(
												'VIcon',
												{
													style: cancelIconStyle,
												},
												cancelIcon,
											)],
										)],
									);
								}
								return h(
									'VIcon',
									{
										style: uploadIconStyle,
										props: {
											large: true,
										},
										key: 0,
									},
									uploadIcon,
								);
							})()],
						)],
					);
				},
			},
		},
	);
}
