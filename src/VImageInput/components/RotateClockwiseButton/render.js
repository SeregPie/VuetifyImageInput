import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		rotateClockwise,
		rotateClockwiseIcon,
	} = parent;
	return h(
		MyButton,
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
