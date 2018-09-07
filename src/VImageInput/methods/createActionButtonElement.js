import Function_cast from '/utils/Function/cast';

export default function(action, icon, iconStyle, text) {
	let {$createElement} = this;
	icon = Function_cast(icon).call(this);
	iconStyle = Function_cast(iconStyle).call(this);
	text = Function_cast(text).call(this);
	let buttonElementOptions = {
		props: {
			flat: true,
			icon: true,
		},
		on: {
			click: action,
		},
	};
	let buttonElement;
	let setButtonElement = (() => {
		buttonElement = $createElement(
			'v-btn',
			buttonElementOptions,
			[$createElement(
				'v-icon',
				{
					style: iconStyle,
				},
				icon,
			)],
		);
	});
	if (text) {
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
				$createElement('span', text),
			],
		);
	} else {
		setButtonElement();
	}
	return buttonElement;
}
