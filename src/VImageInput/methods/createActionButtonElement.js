export default function($createElement, onClick, icon, iconStyle) {
	return $createElement(
		'VBtn',
		{
			class: 'ma-1',
			props: {
				disabled: this.disabled,
				flat: true,
				icon: true,
			},
			on: {
				click: onClick,
			},
		},
		[$createElement(
			'VIcon',
			{
				style: iconStyle,
			},
			icon,
		)],
	);
}
