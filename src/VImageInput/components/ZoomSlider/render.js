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
				input: setZoom,
			},
		},
	);
}
