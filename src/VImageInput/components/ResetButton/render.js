import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		reset: click,
		resetIcon: icon,
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
