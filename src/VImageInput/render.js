export default function($createElement) {
	let {
		checkeredBackground,
		clearable,
		disabled,
		fullHeight,
		fullWidth,
		hideActions,
		image,
		imageHeight,
		imageWidth,
		readonly,
		upload,
		uploadIcon,
		uploadIconStyle,
	} = this;
	return $createElement(
		'div',
		{
			style: {
				display: 'table',
				height: 0,
				width: 0,
				...(fullWidth ? {minWidth: '100%'} : {}),
				...(fullHeight ? {minHeight: '100%'} : {}),
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
										background: checkeredBackground,
										display: 'flex',
										flexGrow: 1,
										justifyContent: 'center',
										minHeight: `${imageHeight}px`,
										minWidth: `${imageWidth}px`,
										width: '100%',
										height: '100%',
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
								[
									...(
										image
											? [$createElement(
												'img',
												{
													attrs: {
														src: image.toDataURL(),
													},
												},
											)]
											: []
									)
								],
							),
							...(
								image
									? []
									: $createElement(
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
									)
							),
						],
					),
					$createElement(
						'div',
						{
							style: {
								display: 'table-cell',
								verticalAlign: 'top',
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
								...(
									clearable
										? [
											this.createClearButtonElement($createElement),
											$createElement('v-spacer'),
										]
										: []
								),
								...(
									hideActions
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
			),
		],
	);
}
