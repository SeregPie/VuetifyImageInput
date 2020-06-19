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
		rotationInTurns,
		translatable,
	} = parent;
	let {
		pan: onPan,
		panEnd: onPanEnd,
		panStart: onPanStart,
	} = listeners;
	return h(
		'div',
		{
			style: {
				...(imageBackgroundColor ? {backgroundColor: imageBackgroundColor} : {}),
				backgroundImage: `url("${internalImageDataURL}")`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				height: `${internalImageHeight}px`,
				transform: [
					`scale(${displayedZoom})`,
					`scale(${[
						flippedHorizontally ? -1 : 1,
						flippedVertically ? -1 : 1,
					].join(',')})`,
					`rotate(${rotationInTurns}turn)`,
					`translate(${[
						`${displayedTranslationHorizontally}px`,
						`${displayedTranslationVertically}px`,
					].join(',')})`,
				].join(' '),
				position: 'relative',
				...(animated ? {transition: `all ${1/2}s`} : {}),
				width: `${internalImageWidth}px`,
			},
			...(translatable
				? (disabled
					? {}
					: {directives: [
						{
							name: 'Claw',
							arg: 'pan',
							value: onPan,
						},
						{
							name: 'Claw',
							arg: 'panStart',
							value: onPanStart,
						},
						{
							name: 'Claw',
							arg: 'panEnd',
							value: onPanEnd,
						},
					]}
				)
				: {}
			),
		},
	);
}
