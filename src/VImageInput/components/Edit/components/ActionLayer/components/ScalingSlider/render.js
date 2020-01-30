export default function(h, {parent}) {
	let {
		disabled,
		overriddenMaxScaling: maxScaling,
		overriddenMinScaling: minScaling,
		scaleDec,
		scaleInc,
		scaleTo,
		scaling,
		scalingStep,
	} = parent;
	return h(
		'VSlider',
		{
			class: 'ma-1',
			props: {
				appendIcon: 'mdi-plus',
				disabled,
				hideDetails: true,
				max: maxScaling,
				min: minScaling,
				prependIcon: 'mdi-minus',
				step: scalingStep,
				value: scaling,
			},
			on: {
				input: scaleTo,
				'click:append': scaleInc,
				'click:prepend': scaleDec,
			},
		},
	);
}
