export default function(h, {
	listeners,
	parent,
}) {
	let {
		animated,
		disabled,
		displayedTranslationHorizontally,
		displayedTranslationVertically,
		displayedZoom,
		imageBackgroundColor,
		internalImageDataURL,
		internalImageHeight,
		internalImageWidth,
		lockDisplayedAnimations,
		rotationInTurns,
		translatable,
		unlockDisplayedAnimations,
	} = parent;
	let {pan: onPan} = listeners;
	return h(
		'div',
		{
			style: {
				borderRadius: '4px',
				borderStyle: 'dashed',
				borderWidth: '4px',
				cursor: (disabled || loading
					? undefined
					: 'pointer'
				),
				display: 'flex',
				justifyContent: 'center',
				bottom: 0,
				left: 0,
				position: 'absolute',
				right: 0,
				top: 0,
			},
			key: 'szrj',
		},
		[h(
			'VSlideYTransition',
			{
				props: {
					leaveAbsolute: true,
				},
			},
			[(() => {
				if (loadSuccess) {
					return h(
						'VIcon',
						{
							props: {
								color: 'success',
								size: '64px',
							},
							key: 1,
						},
						successIcon,
					);
				}
				if (loadError) {
					return h(
						'VIcon',
						{
							props: {
								color: 'error',
								size: '64px',
							},
							key: 2,
						},
						errorIcon,
					);
				}
				if (loading) {
					return h(
						'VProgressCircular',
						{
							props: {
								color: 'primary',
								indeterminate: !loadProgress,
								rotate: -90,
								size: 128,
								value: loadProgress * 100,
								width: 16,
							},
						},
						[h(
							'VBtn',
							{
								props: {
									icon: true,
									large: true,
									text: true,
								},
								on: {
									click(event) {
										event.preventDefault();
										event.stopPropagation();
									},
								},
							},
							[h(
								'VIcon',
								cancelIcon,
							)],
						)],
					);
				}
				return h(
					'VIcon',
					{
						style: uploadIconStyle,
						props: {
							color: (dark
								? 'rgba(255, 255, 255, 0.08)'
								: 'rgba(0, 0, 0, 0.06)'
							),
							size: '128px',
						},
						key: 0,
					},
					uploadIcon,
				);
			})()],;
}
