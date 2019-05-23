export default function(h, {
	parent,
}) {
	return h(
		'MyActionButton',
		{
			props: {
				icon: parent.rotateClockwiseIcon,
				iconStyle: parent.rotateClockwiseIconStyle,
			},
			on: {
				click: parent.rotateClockwise,
			},
		},
	);
}
