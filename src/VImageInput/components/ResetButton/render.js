import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		reset: onClick,
		resetIcon: icon,
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
