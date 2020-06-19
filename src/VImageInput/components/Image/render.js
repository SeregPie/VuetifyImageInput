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
		flippedHorizontally,
		flippedVertically,
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
				width: `${internalImageWidth}px`,
				...(imageBackgroundColor ? {backgroundColor: imageBackgroundColor} : {}),
				...(animated ? {transition: `all ${1/2}s`} : {}),
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
							value: lockDisplayedAnimations,
						},
						{
							name: 'Claw',
							arg: 'panEnd',
							value: unlockDisplayedAnimations,
						},
					]}
				)
				: {}
			),
		},
	);
}
