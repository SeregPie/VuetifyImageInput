export default function(h, {parent}) {
	let {
		disabled,
		maxZoom: max,
		minZoom: min,
		onInteractEnd: end,
		onInteractStart: start,
		setZoom: input,
		zoomIn: clickAppend,
		zoom: value,
		zoomSnap: step,
		zoomInIcon: appendIcon,
		zoomOut: clickPrepend,
		zoomOutIcon: prependIcon,
	} = parent;
	return h(
		'VSlider',
		{
			class: 'ma-1',
			props: {
				appendIcon,
				disabled,
				hideDetails: true,
				max,
				min,
				prependIcon,
				step,
				value,
			},
			on: {
				'click:append': clickAppend,
				'click:prepend': clickPrepend,
				end,
				input,
				start,
			},
		},
	);
}
