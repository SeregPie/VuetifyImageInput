export default function(h, {parent}) {
	let {
		rotateClockwise,
		rotateClockwiseIcon,
	} = parent;
	return h(
		'MyActionButton',
		{
			props: {
				icon: rotateClockwiseIcon,
			},
			on: {
				click: rotateClockwise,
			},
		},
	);
}
