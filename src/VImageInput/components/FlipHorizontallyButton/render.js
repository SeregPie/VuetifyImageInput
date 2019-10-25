export default function(h, {parent}) {
	return h(
		'MyActionButton',
		{
			props: {
				icon: parent.flipHorizontallyIcon,
				iconStyle: parent.flipHorizontallyIconStyle,
			},
			on: {
				click: parent.flipHorizontally,
			},
		},
	);
}
