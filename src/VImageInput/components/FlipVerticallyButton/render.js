import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		flipVertically: onClick,
		flipVerticallyIcon: icon,
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
