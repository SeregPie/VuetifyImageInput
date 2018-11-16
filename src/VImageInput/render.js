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
					this.createOverlayElement($createElement),
					...(this.internalImageData || this.readonly
						? [this.createInputElement($createElement)]
						: [this.createUploaderElement($createElement)]
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
								visibility: 'hidden',
							}
						),
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
		],
	);
}
