import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		onClickToReset: onClick,
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
