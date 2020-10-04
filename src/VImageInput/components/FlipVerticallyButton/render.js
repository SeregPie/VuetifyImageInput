import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		flipVertically: click,
		flipVerticallyIcon: icon,
	} = parent;
	return h(
		MyButton,
		{
			props: {
				icon,
			},
			on: {
				click,
			},
		},
	);
}
