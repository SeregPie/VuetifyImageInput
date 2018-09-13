

export default function($createElement) {
	let {
		disabled,
		icon,
		iconStyle,
		onClick,
		text,
	} = this;
	icon = Function_cast(this.icon).call(this);
	iconStyle = Function_cast(this.iconStyle).call(this);
	text = Function_cast(this.text).call(this);
	let buttonElementOptions = {
		class: 'ma-1',
		props: {
			disabled: this.disabled,
			flat: true,
			icon: true,
		},
		on: {
			click: onClick,
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
