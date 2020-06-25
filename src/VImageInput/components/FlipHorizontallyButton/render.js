import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		flipHorizontallyIcon: icon,
		onClickToFlipHorizontally: onClick,
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
