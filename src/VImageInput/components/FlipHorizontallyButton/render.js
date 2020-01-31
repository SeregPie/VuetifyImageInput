import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		flipHorizontally,
		flipHorizontallyIcon,
	} = parent;
	return h(
		MyButton,
		{
			props: {
				icon: flipHorizontallyIcon,
			},
			on: {
				click: flipHorizontally,
			},
		},
	);
}
