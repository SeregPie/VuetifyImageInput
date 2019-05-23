export default function(h, {
	parent,
}) {
	return h(
		'VSlider',
		{
			class: 'mx-2 my-1',
			props: {
				color: parent.scalingSliderColor,
				disabled: parent.disabled,
				hideDetails: true,
				max: parent.computedMaxScaling,
				min: parent.computedMinScaling,
				step: 1 / 1000,
				value: parent.scaling,
			},
			on: {
				input: parent.scaleTo,
			},
		},
	);
}
