export default function(h, {parent}) {
	let {
		computedMaxZoom,
		computedMinZoom,
		disabled,
		setZoom,
		zoom,
		zoomIn,
		zoomInIcon,
		zoomOut,
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
				max: computedMaxZoom,
				min: computedMinZoom,
				prependIcon: zoomOutIcon,
				step: zoomSnap,
				value: zoom,
			},
			on: {
				'click:append': zoomIn,
				'click:prepend': zoomOut,
				input: setZoom,
			},
		},
	);
}
