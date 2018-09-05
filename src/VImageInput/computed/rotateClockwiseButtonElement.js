import Function_cast from '/utils/Function/cast';

export default function() {
	let {
		$createElement,
		rotateClockwise,
		rotateClockwiseIcon,
		rotateClockwiseIconStyle,
		rotateClockwiseText,
	} = this;
	rotateClockwiseIcon = Function_cast(rotateClockwiseIcon).call(this);
	rotateClockwiseIconStyle = Function_cast(rotateClockwiseIconStyle).call(this);
	rotateClockwiseText = Function_cast(rotateClockwiseText).call(this);
	let iconElement = $createElement(
		'v-icon',
		{
			style: rotateClockwiseIconStyle,
		},
		rotateClockwiseIcon,
	);
	let buttonElementOptions = {
		props: {
			flat: true,
			icon: true,
		},
		on: {
			click: rotateClockwise,
		},
	};
	let buttonElement;
	let setButtonElement = (() => {
		buttonElement = $createElement(
			'v-btn',
			buttonElementOptions,
			[iconElement],
		);
	});
	if (rotateClockwiseText) {
		buttonElementOptions.slot = 'activator';
		setButtonElement();
		buttonElement = $createElement(
			'v-tooltip',
			{
				props: {
					right: true,
				},
			},
			[
				buttonElement,
				$createElement('span', rotateClockwiseText),
			],
		);
	} else {
		setButtonElement();
	}
	return buttonElement;
}
