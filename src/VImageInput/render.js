export default function($createElement) {
	return $createElement(
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
			$createElement(
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
					$createElement(
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
						[$createElement(
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
							[$createElement(
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
										? [$createElement(
											'img',
											{
												style: {
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
										? [$createElement(
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
						: [$createElement(
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
			$createElement(
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
							$createElement(
								'MyActionButton',
								{
									props: {
										disabled: this.disabled,
										icon: this.clearIcon,
										iconStyle: this.clearIconStyle,
									},
									on: {
										click: this.clear,
									},
								},
							),
							$createElement('VSpacer'),
						]
						: []
					),
					...(this.hideActions || this.readonly
						? []
						: [
							$createElement(
								'MyActionButton',
								{
									props: {
										disabled: this.disabled,
										icon: this.rotateClockwiseIcon,
										iconStyle: this.rotateClockwiseIconStyle,
									},
									on: {
										click: this.rotateClockwise,
									},
								},
							),
							$createElement(
								'MyActionButton',
								{
									props: {
										disabled: this.disabled,
										icon: this.rotateCounterclockwiseIcon,
										iconStyle: this.rotateCounterclockwiseIconStyle,
									},
									on: {
										click: this.rotateCounterclockwise,
									},
								},
							),
							$createElement(
								'MyActionButton',
								{
									props: {
										disabled: this.disabled,
										icon: this.flipHorizontallyIcon,
										iconStyle: this.flipHorizontallyIconStyle,
									},
									on: {
										click: this.flipHorizontally,
									},
								},
							),
							$createElement(
								'MyActionButton',
								{
									props: {
										disabled: this.disabled,
										icon: this.flipVerticallyIcon,
										iconStyle: this.flipVerticallyIconStyle,
									},
									on: {
										click: this.flipVertically,
									},
								},
							),
						]
					),
				],
			),
			$createElement(
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
					: [$createElement(
						'VSlider',
						{
							class: 'mx-2 my-1',
							props: {
								color: this.scalingSliderColor,
								disabled: this.disabled,
								hideDetails: true,
								max: this.computedMaxScaling,
								min: this.computedMinScaling,
								step: 1 / 1000,
								value: this.scaling,
							},
							on: {
								input: this.scaleTo,
							},
						},
					)]
				),
			),
		],
	);
}
