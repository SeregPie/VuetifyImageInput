import Button from '../Button';

export default function(h, {parent}) {
	let {
		clear: onClick,
		clearIcon: icon,
	} = parent;
	return h(
		Button,
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
