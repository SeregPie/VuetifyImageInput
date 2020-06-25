import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		onClickToRotateClockwise: onClick,
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
