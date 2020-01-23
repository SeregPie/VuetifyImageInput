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
		dark,
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
					onMouseEnter,
					onMouseLeave,
				}) {
					return h(
						'div',
						{
							style: {
								alignItems: 'center',
								backgroundColor: (dark
									? (active
										? 'rgba(255, 255, 255, 0.16)'
										: 'rgba(255, 255, 255, 0.08)'
									)
									: (active
										? 'rgba(0, 0, 0, 0.12)'
										: 'rgba(0, 0, 0, 0.06)'
									)
								),
								borderColor: (dark
									? (active
										? '#fff'
										: 'rgba(255, 255, 255, 0.7)'
									)
									: (active
										? 'rgba(0, 0, 0, 0.87)'
										: 'rgba(0, 0, 0, 0.42)'
									)
								),
								borderRadius: '4px',
								borderStyle: 'dashed',
								borderWidth: '1px',
								cursor: (disabled || loading
									? undefined
									: 'pointer'
								),
								display: 'flex',
								justifyContent: 'center',
								position: 'relative',
								transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)',
								...style,
							},
							...(disabled || loading
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
											color: (dark
												? 'rgba(255, 255, 255, 0.08)'
												: 'rgba(0, 0, 0, 0.06)'
											),
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
