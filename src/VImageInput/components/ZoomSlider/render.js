export default function(h, {parent}) {
	let {
		disabled,
		overriddenMaxZoom: maxZoom,
		overriddenMinZoom: minZoom,
		setZoom,
		zoom,
		zoomIn,
		zoomOut,
		zoomSnap,
		zoomInIcon,
		zoomOutIcon,
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
				input: setZoom,
				'click:append': zoomIn,
				'click:prepend': zoomOut,
			},
		},
	);
}
