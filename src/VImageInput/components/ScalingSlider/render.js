export default function(h, {parent}) {
	let {
		computedMaxScaling,
		computedMinScaling,
		disabled,
		scaleTo,
		scaling,
	} = parent;
	return h(
		'VSlider',
		{
			class: 'ma-1',
			props: {
				disabled,
				hideDetails: true,
				max: computedMaxScaling,
				min: computedMinScaling,
				step: 1 / 1000,
				value: scaling,
			},
			on: {
				input: scaleTo,
			},
		},
	);
}
