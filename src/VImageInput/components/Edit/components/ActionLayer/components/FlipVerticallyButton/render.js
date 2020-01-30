import MyButton from '../Button';

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
