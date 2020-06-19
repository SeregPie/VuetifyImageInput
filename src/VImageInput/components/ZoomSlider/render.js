export default function(h, {parent}) {
	let {
		disabled,
		overriddenMaxZoom: maxZoom,
		overriddenMinZoom: minZoom,
		setZoom,
		zoom,
		zoomIn,
		zoomInIcon,
		zoomOut,
		zoomOutIcon,
		zoomSnap,
		lockDisplayedAnimations,
		unlockDisplayedAnimations,
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
				'click:append': zoomIn,
				'click:prepend': zoomOut,
				end: unlockDisplayedAnimations,
				input: setZoom,
				start: lockDisplayedAnimations,
			},
		},
	);
}
