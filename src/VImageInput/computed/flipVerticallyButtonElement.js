import Function_cast from '/utils/Function/cast';

export default function() {
	let {
		$createElement,
		flipVertically,
		flipVerticallyIcon,
		flipVerticallyIconStyle,
		flipVerticallyText,
	} = this;
	flipVerticallyIcon = Function_cast(flipVerticallyIcon).call(this);
	flipVerticallyIconStyle = Function_cast(flipVerticallyIconStyle).call(this);
	flipVerticallyText = Function_cast(flipVerticallyText).call(this);
	let iconElement = $createElement(
		'v-icon',
		{
			style: flipVerticallyIconStyle,
		},
		flipVerticallyIcon,
	);
	let buttonElementOptions = {
		props: {
			flat: true,
			icon: true,
		},
		on: {
			click: flipVertically,
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
	if (flipVerticallyText) {
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
				$createElement('span', flipVerticallyText),
			],
		);
	} else {
		setButtonElement();
	}
	return buttonElement;
}
