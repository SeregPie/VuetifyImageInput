import MyButton from '../Button';

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
