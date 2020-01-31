import MyButton from '../ActionButton';

export default function(h, {parent}) {
	let {
		clear,
		clearIcon,
	} = parent;
	return h(
		MyButton,
		{
			props: {
				icon: clearIcon,
			},
			on: {
				click: clear,
			},
		},
	);
}
