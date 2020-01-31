import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		rotateCounterClockwise,
		rotateCounterClockwiseIcon,
	} = parent;
	return h(
		MyButton,
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
