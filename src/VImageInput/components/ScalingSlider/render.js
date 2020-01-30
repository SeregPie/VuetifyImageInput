export default function(h, {parent}) {
	let {
		disabled,
		overriddenMaxScaling,
		overriddenMinScaling,
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
				max: overriddenMaxScaling,
				min: overriddenMinScaling,
				step: 1 / 1000,
				value: scaling,
			},
			on: {
				input: scaleTo,
			},
		},
	);
}
