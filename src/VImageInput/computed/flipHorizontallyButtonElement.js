import Function_cast from '/utils/Function/cast';

export default function() {
	let {
		$createElement,
		flipHorizontally,
		flipHorizontallyIcon,
		flipHorizontallyIconStyle,
		flipHorizontallyText,
	} = this;
	flipHorizontallyIcon = Function_cast(flipHorizontallyIcon).call(this);
	flipHorizontallyIconStyle = Function_cast(flipHorizontallyIconStyle).call(this);
	flipHorizontallyText = Function_cast(flipHorizontallyText).call(this);
	let iconElement = $createElement(
		'v-icon',
		{
			style: flipHorizontallyIconStyle,
		},
		flipHorizontallyIcon,
	);
	let buttonElementOptions = {
		props: {
			flat: true,
			icon: true,
		},
		on: {
			click: flipHorizontally,
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
	if (flipHorizontallyText) {
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
				$createElement('span', flipHorizontallyText),
			],
		);
	} else {
		setButtonElement();
	}
	return buttonElement;
}
