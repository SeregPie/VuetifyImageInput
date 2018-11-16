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
						position: 'relative',
					},
				},
				[
					$createElement(
						'div',
						{
							style: {
								alignItems: 'center',
								background: this.__checkeredBackground,
								display: 'flex',
								height: '100%',
								justifyContent: 'center',
								overflow: 'hidden',
								position: 'relative',
								width: '100%',
								zIndex: 0,
								...(this.__internalImageData || this.readonly
									? {}
									: {
										opacity: 0,
										visibility: 'hidden',
									}
								),
							},
							...(this.disabled || this.readonly
								? {}
								: {directives: [{
									name: 'Claw',
									arg: 'pan',
									value: this.__onPan,
								}]}
							),
						},
						[$createElement(
							'div',
							{
								style: {
									border: `${this.overlayBorderWidth} solid ${this.__remappedOverlayBorderColor}`,
									boxShadow: `0 0 4000px 4000px ${this.__remappedOverlayBackgroundColor}`,
									margin: this.overlayPadding,
									pointerEvents: 'none',
									...(this.__internalImageData
										? {}
										: {
											opacity: 0,
											visibility: 'hidden',
										}
									),
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
								[$createElement(
									'img',
									{
										style: {
											pointerEvents: 'none',
											position: 'absolute',
											transform: [
												...(this.__flippedVertically ? [`translateY(${this.imageHeight}px)`, 'scaleY(-1)'] : []),
												...(this.__flippedHorizontally ? [`translateX(${this.imageWidth}px)`, 'scaleX(-1)'] : []),
												//...(this.rotated ? [`translateX(${this.imageHeight}px)`, 'rotate(90deg)'] : []),
												`translate(${this.__croppingLeft}px,${this.__croppingTop}px)`,
												`scale(${this.__scaling})`,
											].join(' '),
											transformOrigin: '0 0',
										},
										attrs: {
											src: this.__internalImageData,
										},
									},
								)],
							)]
						)],
					),
					...(this.__internalImageData || this.readonly
						? [$createElement(
							'input',
							{
								attrs: {
									name: this.name,
									type: 'hidden',
									value: this.__imageData,
								},
							},
						)]
						: [$createElement(
							'MyUploader',
							{
								props: {
									disabled: this.disabled,
									uploadIcon: this.__remappedUploadIcon,
									uploadIconStyle: this.__remappedUploadIconStyle,
								},
								style: {
									bottom: 0,
									left: 0,
									position: 'absolute',
									right: 0,
									top: 0,
								},
								on: {
									load: this.__load,
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
						...(this.__internalImageData
							? {}
							: {
								opacity: 0,
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
										icon: this.__remappedClearIcon,
										iconStyle: this.__remappedClearIconStyle,
									},
									on: {
										click: this.__clear,
									},
								},
							),
							$createElement('v-spacer'),
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
										icon: this.__remappedFlipHorizontallyIcon,
										iconStyle: this.__remappedFlipHorizontallyIconStyle,
									},
									on: {
										click: this.__flipHorizontally,
									},
								},
							),
							$createElement(
								'MyActionButton',
								{
									props: {
										disabled: this.disabled,
										icon: this.__remappedFlipVerticallyIcon,
										iconStyle: this.__remappedFlipVerticallyIconStyle,
									},
									on: {
										click: this.__flipVertically,
									},
								},
							),
							//this.createRotateClockwiseButtonElement($createElement),
							//this.createRotateCounterclockwiseButtonElement($createElement),
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
						...(this.__internalImageData
							? {}
							: {
								opacity: 0,
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
								color: this.__remappedScalingSliderColor,
								disabled: this.disabled,
								hideDetails: true,
								max: this.__cleanMaxScaling,
								min: this.__cleanMinScaling,
								step: 1 / 1000,
								value: this.__scaling,
							},
							on: {
								input: this.__setScaling,
							},
						},
					)]
				),
			),
		],
	);
}
