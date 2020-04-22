import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		rotateCounterClockwise: onClick,
		rotateCounterClockwiseIcon: icon,
	} = parent;
	return h(
		MyButton,
		{
			props: {
				icon,
			},
			on: {
				click: onClick,
			},
		},
	);
}
