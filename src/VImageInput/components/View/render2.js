export default function(h, {
	data,
	parent,
	scopedSlots,
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
		fullHeight,
		fullWidth,
	} = parent;
	return h(
		'div',
		{
			style: {
				display: ['-ms-inline-grid', 'inline-grid'],
				gridColumns: '1fr auto',
				gridRows: 'auto 1fr auto',
				gridTemplateColumns: '1fr auto',
				gridTemplateRows: 'auto 1fr auto',
			},
		},
		[
			h(
				'div',
				{
					style: {
						gridColumn: 1,
						gridRow: 1,
						overflow: 'hidden',
						position: 'relative',
					},
				},
				[
					h(
						'div',
						{
							style: {
								alignItems: 'center',
								background: this.checkeredBackground,
								display: 'flex',
								height: '100%',
								justifyContent: 'center',
								overflow: 'hidden',
								padding: `calc(${this.overlayPadding} + ${this.overlayBorderWidth})`,
								position: 'relative',
								width: '100%',
								zIndex: 0,
								...(this.internalImageData || this.readonly
									? {}
									: {
										opacity: 0,
										pointerEvents: 'none',
										visibility: 'hidden',
									}
								),
							},
							...(this.internalImageData
								? (this.disabled || this.readonly
									? {}
									: {directives: [{
										name: 'Claw',
										arg: 'pan',
										value: this.onPan,
									}]}
								)
								: {}
							),
						},
						[h(
							'div',
							{
								style: {
									boxShadow: `0 0 4000px 4000px ${this.overlayBackgroundColor}`,
									maxHeight: '100%',
									maxWidth: '100%',
									outline: `${this.overlayBorderWidth} solid ${this.overlayBorderColor}`,
									pointerEvents: 'none',
								},
							},
							[h(
								'div',
								{
									style: {
										height: `${this.imageHeight}px`,
										position: 'relative',
										width: `${this.imageWidth}px`,
										zIndex: -1,
										...(this.backgroundColor
											? {backgroundColor: this.backgroundColor}
											: {}
										),
									},
								},
								[
									...(this.internalImageData
										? [h(
											'img',
											{
												style: {
													pointerEvents: 'none',
													position: 'absolute',
													transform: [
														`translate(${this.croppingLeft}px,${this.croppingTop}px)`,
														`scale(${this.zoom})`,
														...(this.rotated ? [`translateX(${this.internalImageHeight}px)`, 'rotate(90deg)'] : []),
														...(this.flippedVertically ? [`translateY(${this.internalImageHeight}px)`, 'scaleY(-1)'] : []),
														...(this.flippedHorizontally ? [`translateX(${this.internalImageWidth}px)`, 'scaleX(-1)'] : []),
													].join(' '),
													transformOrigin: '0 0',
												},
												attrs: {
													src: this.internalImageData,
												},
											},
										)]
										: []
									),
									...(this.internalImageData && this.imageData
										? [h(
											'input',
											{
												attrs: {
													name: this.name,
													type: 'hidden',
													value: this.imageData,
												},
											},
										)]
										: []
									),
								],
							)],
						)],
					),
					...(this.internalImageData || this.readonly
						? []
						: [h(
							'MyUploader',
							{
								props: {
									disabled: this.disabled,
									uploadIcon: this.uploadIcon,
									uploadIconStyle: this.uploadIconStyle,
								},
								style: {
									bottom: 0,
									left: 0,
									position: 'absolute',
									right: 0,
									top: 0,
								},
								on: {
									load: this.load,
								},
							},
						)]
					),
				],
			),
			h(
				'div',
				{
					style: {
						display: 'flex',
						flexDirection: 'column',
						gridColumn: 2,
						gridRow: 1,
						justifyContent: 'center',
						...(this.internalImageData
							? {}
							: {
								opacity: 0,
								pointerEvents: 'none',
								visibility: 'hidden',
							}
						),
					},
				},
				[
					...(this.clearable
						? [
							h('MyClearButton'),
							h('VSpacer'),
						]
						: []
					),
					...(this.hideActions || this.readonly
						? []
						: [
							h('MyRotateClockwiseButton'),
							h('MyRotateCounterclockwiseButton'),
							h('MyFlipHorizontallyButton'),
							h('MyFlipVerticallyButton'),
						]
					),
				],
			),
			h(
				'div',
				{
					style: {
						gridColumn: 1,
						gridRow: 2,
						...(this.internalImageData
							? {}
							: {
								opacity: 0,
								pointerEvents: 'none',
								visibility: 'hidden',
							}
						),
					},
				},
				(this.hideActions || this.readonly
					? []
					: [h('MyZoomSlider')]
				),
			),
		],
	);
}



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
