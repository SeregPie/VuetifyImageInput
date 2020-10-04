import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		rotateCounterClockwise: click,
		rotateCounterClockwiseIcon: icon,
	} = parent;
	return h(
		MyButton,
		{
			props: {
				icon,
			},
			on: {
				click,
			},
		},
	);
}
