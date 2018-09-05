import Function_cast from '/utils/Function/cast';

export default function() {
	let {
		$createElement,
		rotateCounterclockwise,
		rotateCounterclockwiseIcon,
		rotateCounterclockwiseIconStyle,
		rotateCounterclockwiseText,
	} = this;
	rotateCounterclockwiseIcon = Function_cast(rotateCounterclockwiseIcon).call(this);
	rotateCounterclockwiseIconStyle = Function_cast(rotateCounterclockwiseIconStyle).call(this);
	rotateCounterclockwiseText = Function_cast(rotateCounterclockwiseText).call(this);
	let iconElement = $createElement(
		'v-icon',
		{
			style: rotateCounterclockwiseIconStyle,
		},
		rotateCounterclockwiseIcon,
	);
	let buttonElementOptions = {
		props: {
			flat: true,
			icon: true,
		},
		on: {
			click: rotateCounterclockwise,
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
	if (rotateCounterclockwiseText) {
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
				$createElement('span', rotateCounterclockwiseText),
			],
		);
	} else {
		setButtonElement();
	}
	return buttonElement;
}
