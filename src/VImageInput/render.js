export default function($createElement) {
	return $createElement(
		'div',
		{
			style: {
				display: 'inline',
				...(this.fullWidth ? {width: '100%'} : {}),
				...(this.fullHeight ? {height: '100%'} : {}),
			},
		},
		[$createElement(
			'div',
			{
				style: {
					display: 'table',
					height: 0,
					minHeight: '100%',
					minWidth: '100%',
					width: 0,
				},
			},
			[
				$createElement(
					'div',
					{
						style: {
							display: 'table-row',
						},
					},
					[
						$createElement(
							'div',
							{
								style: {
									display: 'table-cell',
									height: '100%',
									position: 'relative',
									width: '100%',
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
											padding: this.overlayPadding,
											position: 'relative',
											width: '100%',
											...(this.internalImageData
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
												name: 'MyDrag',
												value: this.onDrag,
												modifiers: ['prevent'],
											}]}
										),
									},
									[$createElement(
										'div',
										{
											style: {
												height: `${this.imageHeight}px`,
												pointerEvents: 'none',
												position: 'relative',
												width: `${this.imageWidth}px`,
											},
										},
										[
											$createElement(
												'img',
												{
													style: {
														left: `${-this.cropLeft}px`,
														pointerEvents: 'none',
														position: 'absolute',
														top: `${-this.cropTop}px`,
														transform: [
															`scale(${this.scaling})`,
															...(this.rotated ? ['rotate(90deg)', 'translateY(-100%)'] : []),
															...(this.flippedVertically ? ['translateY(100%)', 'scaleY(-1)'] : []),
															...(this.flippedHorizontally ? ['translateX(100%)', 'scaleX(-1)'] : []),
														].join(' '),
														transformOrigin: '0 0',
													},
													attrs: {
														src: this.internalImageData,
													},
												},
											),
											$createElement(
												'div',
												{
													style: {
														border: `${this.overlayBorderWidth} solid ${this.overlayBorderColor}`,
														bottom: 0,
														boxShadow: `0 0 4000px 4000px ${this.overlayBackgroundColor}`,
														boxSizing: 'content-box',
														left: 0,
														position: 'absolute',
														right: 0,
														top: 0,
													},
												},
											),
										],
									)],
								),
								...(this.internalImageData
									? []
									: [$createElement(
										'MyUploader',
										{
											props: {
												disabled: this.disabled || this.readonly,
												uploadIcon: this.remappedUploadIcon,
												uploadIconStyle: this.remappedUploadIconStyle,
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
									display: 'table-cell',
									verticalAlign: 'top',
									...(this.internalImageData
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
										display: 'flex',
										flexDirection: 'column',
										height: '100%',
										width: '100%',
									},
								},
								[
									...(this.clearable
										? [
											this.createClearButtonElement($createElement),
											$createElement('v-spacer'),
										]
										: []
									),
									...(this.hideActions || this.readonly
										? []
										: [
											this.createFlipHorizontallyButtonElement($createElement),
											this.createFlipVerticallyButtonElement($createElement),
											this.createRotateClockwiseButtonElement($createElement),
											this.createRotateCounterclockwiseButtonElement($createElement),
										]
									),
								],
							)],
						),
					],
				),
				$createElement(
					'div',
					{
						style: {
							display: 'table-row',
						},
					},
					[
						$createElement(
							'div',
							{
								style: {
									display: 'table-cell',
									...(this.internalImageData
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
								: [this.createScaleSliderElement($createElement)]
							),
						),
						$createElement(
							'div',
							{
								style: {
									display: 'table-cell',
								},
							},
						),
					],
				),
			],
		)],
	);
}
