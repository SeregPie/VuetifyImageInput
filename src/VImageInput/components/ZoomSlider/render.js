export default function(h, {parent}) {
	let {
		disabled,
		overriddenMaxZoom: maxZoom,
		overriddenMinZoom: minZoom,
		setZooming,
		zoomIn,
		zooming,
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
				value: zooming,
			},
			on: {
				input: setZooming,
				'click:append': zoomIn,
				'click:prepend': zoomOut,
			},
		},
	);
}
