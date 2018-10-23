export default function($createElement) {
	return $createElement(
		'VSlider',
		{
			class: 'mx-2 my-1',
			props: {
				disabled: this.disabled,
				hideDetails: true,
				max: this.maxScaling,
				min: this.minScaling,
				step: 1 / 1000,
				value: this.scaling,
			},
			on: {
				input: this.setScaling,
			},
		},
	);
}
