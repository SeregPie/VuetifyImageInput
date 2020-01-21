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
		readonly,
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
					onMouseEnter,
					onMouseLeave,
				}) {
					return h(
						'div',
						{
							style: {
								alignItems: 'center',
								display: 'flex',
								justifyContent: 'center',
								position: 'relative',
								borderStyle: 'dashed',
								borderWidth: '1px',
								borderColor: active ? 'red' : 'grey',
								...style,
							},
							props: {
								disabled: disabled || readonly,
								outlined: true,
							},
							...((disabled || readonly || loading)
								? {}
								: {on: {
									click: onClick,
									dragenter: onDragEnter,
									dragleave: onDragLeave,
									dragover: onDragOver,
									drop: onDrop,
									mouseenter: onMouseEnter,
									mouseleave: onMouseLeave,
								}}
							),
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
									return h(
										'VProgressCircular',
										{
											props: {
												color: 'primary',
												indeterminate: !loadProgress,
												rotate: -90,
												size: 64,
												value: loadProgress * 100,
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
													click(event) {
														event.preventDefault();
														event.stopPropagation();
														cancelLoad();
													},
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
											color: active ? 'primary': undefined,
											size: '128px',
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
