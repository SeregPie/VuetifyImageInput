export default function(h, {parent}) {
	return h(
		'MyActionButton',
		{
			props: {
				icon: parent.rotateCounterClockwiseIcon,
				iconStyle: parent.rotateCounterClockwiseIconStyle,
			},
			on: {
				click: parent.rotateCounterClockwise,
			},
		},
	);
}
