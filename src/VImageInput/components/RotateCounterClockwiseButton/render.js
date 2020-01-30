export default function(h, {parent}) {
	let {
		rotateCounterClockwise,
		rotateCounterClockwiseIcon,
	} = parent;
	return h(
		'MyActionButton',
		{
			props: {
				icon: rotateCounterClockwiseIcon,
			},
			on: {
				click: rotateCounterClockwise,
			},
		},
	);
}
