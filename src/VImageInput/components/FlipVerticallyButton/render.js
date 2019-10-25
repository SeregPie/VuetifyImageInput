export default function(h, {parent}) {
	return h(
		'MyActionButton',
		{
			props: {
				icon: parent.flipVerticallyIcon,
				iconStyle: parent.flipVerticallyIconStyle,
			},
			on: {
				click: parent.flipVertically,
			},
		},
	);
}
