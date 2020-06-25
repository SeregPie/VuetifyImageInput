export default function(h, {parent}) {
	let {
		disabled,
		maxZoom,
		minZoom,
		onClickToZoomIn,
		onClickToZoomOut,
		onInputToSetZoom,
		zoom,
		zoomInIcon,
		zoomOutIcon,
		zoomSnap,
	} = parent;
	return h(
		'VSlider',
		{
			class: 'ma-1',
			props: {
				appendIcon: zoomInIcon,
				disabled,
				hideDetails: true,
				max: maxZoom,
				min: minZoom,
				prependIcon: zoomOutIcon,
				step: zoomSnap,
				value: zoom,
			},
			on: {
				'click:append': onClickToZoomIn,
				'click:prepend': onClickToZoomOut,
				//end: unlockDisplayedAnimations,
				input: onInputToSetZoom,
				//start: lockDisplayedAnimations,
			},
		},
	);
}
