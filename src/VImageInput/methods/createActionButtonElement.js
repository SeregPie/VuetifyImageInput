export default function($createElement, onClick, icon, iconStyle) {
	return $createElement(
		'v-btn',
		{
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
			'v-icon',
			{
				style: iconStyle,
			},
			icon,
		)],
	);
}
