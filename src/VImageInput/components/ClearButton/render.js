import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		clear: click,
		clearIcon: icon,
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
