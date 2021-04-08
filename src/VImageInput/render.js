export default function(h) {
	return h(
		'div',
		{
			style: {
				display: ['-ms-inline-grid', 'inline-grid'],
				gridColumns: '1fr auto',
				gridRows: '1fr auto',
				gridTemplateColumns: '1fr auto',
				gridTemplateRows: '1fr auto',
				...(this.fullHeight ? {height: '100%'} : {}),
				...(this.fullWidth ? {width: '100%'} : {}),
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
										...(this.imageBackgroundColor
											? {backgroundColor: this.imageBackgroundColor}
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
													display: 'block',
													pointerEvents: 'none',
													position: 'absolute',
													transform: [
														`translate(${this.croppingLeft}px,${this.croppingTop}px)`,
														`scale(${this.scaling})`,
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
							'MyFileUpload',
							{
								style: {
									bottom: 0,
									left: 0,
									position: 'absolute',
									right: 0,
									top: 0,
								},
								on: {
									load: (({
										file: {
											lastModified,
											name,
											size,
											type,
										},
										result,
									}) => {
										this.$emit('file-info', {
											name,
											size,
											type,
											lastModified,
										});
										this.load(result);
									}),
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
							h('MyRotateCounterClockwiseButton'),
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
					: [h('MyScalingSlider')]
				),
			),
		],
	);
}
