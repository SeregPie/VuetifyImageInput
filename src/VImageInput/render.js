export default function($createElement) {
	return $createElement(
		'div',
		{
			style: {
				display: 'inline-grid',
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
						position: 'relative',
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
						display: 'flex',
						flexDirection: 'column',
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
