import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		flipHorizontally: click,
		flipHorizontallyIcon: icon,
	} = parent;
	return h(
		MyButton,
		{
			props: {
				icon,
			},
			on: {
				click: click,
			},
		},
	);
}
