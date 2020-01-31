import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		flipVertically,
		flipVerticallyIcon,
	} = parent;
	return h(
		MyButton,
		{
			props: {
				icon: flipVerticallyIcon,
			},
			on: {
				click: flipVertically,
			},
		},
	);
}
