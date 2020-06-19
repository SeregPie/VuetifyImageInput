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
	return (image
		? h(
			'div',
			{
				style: {
					background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC) repeat',
					border: '1px solid #ccc',
					borderRadius: '4px',
					bottom: 0,
					left: 0,
					overflow: 'hidden',
					position: 'absolute',
					right: 0,
					top: 0,
				},
				key: 'anlq',
			},
			[h(
				'div',
				{
					style: {
						bottom: '50%',
						position: 'absolute',
						right: '50%',
						transform: 'translate(50%,50%)',
						width: `${imageWidth}px`,
						height: `${imageHeight}px`,
					},
				},
				[
					h(
						'div',
						{
							style: {
								bottom: '50%',
								position: 'absolute',
								right: '50%',
								transform: 'translate(50%,50%)',
							},
						},
						[h(MyImage)],
					),
					h(
						'div',
						{
							style: {
								bottom: 0,
								boxShadow: '0 0 4000px 4000px rgba(0,0,0,0.5)',
								left: 0,
								position: 'absolute',
								right: 0,
								top: 0,
							},
						},
					),
					h(
						'div',
						{
							style: {
								backgroundColor: '#fff',
								bottom: '100%',
								height: '4px',
								left: 0,
								position: 'absolute',
								right: 0,
							},
						},
					),
					h(
						'div',
						{
							style: {
								backgroundColor: '#fff',
								bottom: '100%',
								height: '4px',
								left: '100%',
								position: 'absolute',
								width: '4px',
							},
						},
					),
					h(
						'div',
						{
							style: {
								backgroundColor: '#fff',
								bottom: 0,
								position: 'absolute',
								right: '100%',
								top: 0,
								width: '4px',
							},
						},
					),
					h(
						'div',
						{
							style: {
								backgroundColor: '#fff',
								height: '4px',
								left: '100%',
								position: 'absolute',
								top: '100%',
								width: '4px',
							},
						},
					),
					h(
						'div',
						{
							style: {
								backgroundColor: '#fff',
								height: '4px',
								left: 0,
								position: 'absolute',
								right: 0,
								top: '100%',
							},
						},
					),
					h(
						'div',
						{
							style: {
								backgroundColor: '#fff',
								height: '4px',
								position: 'absolute',
								right: '100%',
								top: '100%',
								width: '4px',
							},
						},
					),
					h(
						'div',
						{
							style: {
								backgroundColor: '#fff',
								bottom: 0,
								left: '100%',
								position: 'absolute',
								top: 0,
								width: '4px',
							},
						},
					),
					h(
						'div',
						{
							style: {
								backgroundColor: '#fff',
								bottom: '100%',
								height: '4px',
								position: 'absolute',
								right: '100%',
								width: '4px',
								...(resizable ? {cursor: 'nwse-resize'} : {}),
							},
						},
					),
				]),
			],
		);
}
