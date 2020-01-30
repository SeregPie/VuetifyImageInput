export default function(h, {parent}) {
	let {
		clear,
		clearIcon,
	} = parent;
	return h(
		'MyActionButton',
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
