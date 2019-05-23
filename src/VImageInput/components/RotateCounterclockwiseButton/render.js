export default function(h, {
	parent,
}) {
	return h(
		'MyActionButton',
		{
			props: {
				icon: parent.rotateCounterclockwiseIcon,
				iconStyle: parent.rotateCounterclockwiseIconStyle,
			},
			on: {
				click: parent.rotateCounterclockwise,
			},
		},
	);
}
