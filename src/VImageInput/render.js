export default function($createElement) {
	return $createElement(
		'div',
		{
			style: {
				display: 'table',
				height: 0,
				width: 0,
				...(this.fullWidth ? {minWidth: '100%'} : {}),
				...(this.fullHeight ? {minHeight: '100%'} : {}),
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
								'my-cropper',
								{
									style: {
										height: '100%',
										width: '100%',
										...(originalImage
											? {}
											: {
												opacity: 0,
												visibility: 'hidden',
											}
										),
									},
								},
								[
									...(originalImage
										? [$createElement(
											'img',
											{
												style: {
													left: '50%',
													position: 'absolute',
													top: '50%',
													transform: [
														'translate(-50%,-50%)',
														`scale(${[
															originalImage.flipHorizontally ? -1 : 1,
															originalImage.flipVertically ? -1 : 1,
														].join(',')})`,
														`rotate(${originalImage.rotate * 90}deg)`,
													].join(' '),
												},
												attrs: {
													src: originalImage.data,
												},
											},
										)]
										: []
									),
									$createElement(
										'div',
										{
											style: {
												border: '4px solid #fff',
												height: `${imageHeight}px`,
												position: 'relative',
												width: `${imageWidth}px`,
												boxShadow: '0 0 9999px 9999px rgba(0,0,0,0.5)',
											},
										},
									),
								],
							),
							...(originalImage
								? []
								: [(() => {
									let {
										upload,
										uploadIcon,
										uploadIconStyle,
									} = this;
									return $createElement(
										'my-uploader',
										{
											props: {
												disabled: disabled || readonly,
												uploadIcon: uploadIcon,
												uploadIconStyle: uploadIconStyle,
											},
											style: {
												bottom: 0,
												left: 0,
												position: 'absolute',
												right: 0,
												top: 0,
											},
											on: {
												load: upload,
											},
										},
									);
								})()]
							),
						],
					),
					$createElement(
						'div',
						{
							style: {
								display: 'table-cell',
								verticalAlign: 'top',
								...(originalImage
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
								...(clearable
									? [
										(() => {
											let {
												clearIcon,
												clearIconStyle,
												clear,
											} = this;
											return $createElement(
												'my-action-button',
												{
													props: {
														disabled: disabled,
														icon: clearIcon,
														iconStyle: clearIconStyle,
													},
													on: {
														click: clear,
													},
												},
											);
										})(),
										$createElement('v-spacer'),
									]
									: []
								),
								...(hideActions || readonly
									? []
									: (() => {
										let {
											flipHorizontallyIcon,
											flipHorizontallyIconStyle,
											flipHorizontallyText,
											flipVerticallyIcon,
											flipVerticallyIconStyle,
											flipVerticallyText,
											rotateClockwiseIcon,
											rotateClockwiseIconStyle,
											rotateClockwiseText,
											rotateCounterclockwiseIcon,
											rotateCounterclockwiseIconStyle,
											rotateCounterclockwiseText,
										} = this;
										return [
											$createElement(
												'my-action-button',
												{
													props: {
														disabled: disabled,
														icon: flipHorizontallyIcon,
														iconStyle: flipHorizontallyIconStyle,
														text: flipHorizontallyText,
													},
													on: {
														click() {
															originalImage.flipHorizontally = !originalImage.flipHorizontally;
														},
													},
												},
											),
											$createElement(
												'my-action-button',
												{
													props: {
														disabled: disabled,
														icon: flipVerticallyIcon,
														iconStyle: flipVerticallyIconStyle,
														text: flipVerticallyText,
													},
													on: {
														click() {
															originalImage.flipVertically = !originalImage.flipVertically;
														},
													},
												},
											),
											$createElement(
												'my-action-button',
												{
													props: {
														disabled: disabled,
														icon: rotateClockwiseIcon,
														iconStyle: rotateClockwiseIconStyle,
														text: rotateClockwiseText,
													},
													on: {
														click() {
															originalImage.rotate = ((originalImage.rotate + 1) % 4 + 4) % 4;
														},
													},
												},
											),
											$createElement(
												'my-action-button',
												{
													props: {
														disabled: disabled,
														icon: rotateCounterclockwiseIcon,
														iconStyle: rotateCounterclockwiseIconStyle,
														text: rotateCounterclockwiseText,
													},
													on: {
														click() {
															originalImage.rotate = ((originalImage.rotate - 1) % 4 + 4) % 4;
														},
													},
												},
											),
										];
									})()
								),
							],
						)],
					),
				],
			),
			/*$createElement(
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
								...(
									image
										? {}
										: {
											opacity: 0,
											visibility: 'hidden',
										}
								),
							},
						},
						[$createElement(
							'v-slider',
							{
								class: 'mx-2 my-1',
								props: {
									hideDetails: true,
								},
							},
						)],
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
			),*/
		],
	);
}
