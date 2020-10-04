import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		rotateClockwise: click,
		rotateClockwiseIcon: icon,
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
