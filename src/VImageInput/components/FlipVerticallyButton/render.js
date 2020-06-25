import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		flipVerticallyIcon: icon,
		onClickToFlipVertically: onClick,
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
