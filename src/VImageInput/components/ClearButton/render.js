import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		clear: onClick,
		clearIcon: icon,
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
