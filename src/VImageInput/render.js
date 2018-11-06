export default function($createElement) {
	return $createElement(
		'div',
		{
			style: {
				display: 'inline-table',
				height: this.fullHeight ? '100%' : 0,
				width: this.fullWidth ? '100%' : 0,
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
							this.createOverlayElement($createElement),
							...(this.internalImageData || this.readonly
								? []
								: [this.createUploaderElement($createElement)]
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
									justifyContent: 'center',
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
										//this.createRotateClockwiseButtonElement($createElement),
										//this.createRotateCounterclockwiseButtonElement($createElement),
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
							: [this.createScalingSliderElement($createElement)]
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
	);
}
