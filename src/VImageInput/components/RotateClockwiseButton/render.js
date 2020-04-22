import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		rotateClockwise: onClick,
		rotateClockwiseIcon: icon,
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
