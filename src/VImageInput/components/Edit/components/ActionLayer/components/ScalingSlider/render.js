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
				disabled,
				hideDetails: true,
				max: maxScaling,
				min: minScaling,
				step: scalingStep,
				value: scaling,
				//vertical: true,
			},
			on: {
				input: scaleTo,
			},
			scopedSlots: {
				prepend: (() => h(
					'VIcon',
					{
						props: {},
						on: {
							click: scaleDec,
						},
					},
					'mdi-minus',
				)),
				append: (() => h(
					'VIcon',
					{
						props: {},
						on: {
							click: scaleInc,
						},
					},
					'mdi-plus',
				)),
			}
		},
	);
}
