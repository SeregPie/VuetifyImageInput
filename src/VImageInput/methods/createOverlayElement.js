export default function($createElement) {
	return $createElement(
		'div',
		{
			style: {
				alignItems: 'center',
				background: this.checkeredBackground,
				display: 'flex',
				height: '100%',
				justifyContent: 'center',
				overflow: 'hidden',
				position: 'relative',
				width: '100%',
				zIndex: 0,
				...(this.internalImageData || this.readonly
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
					name: 'Pan',
					value: this.onPan,
				}]}
			),
		},
		[$createElement(
			'div',
			{
				style: {
					border: `${this.overlayBorderWidth} solid ${this.overlayBorderColor}`,
					boxShadow: `0 0 4000px 4000px ${this.overlayBackgroundColor}`,
					margin: this.overlayPadding,
					pointerEvents: 'none',
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
				[this.createImageElement($createElement)],
			)]
		)],
	);
}
