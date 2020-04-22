import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		flipHorizontally: onClick,
		flipHorizontallyIcon: icon,
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
