import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		clearIcon: icon,
		onClickToClear: onClick,
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
