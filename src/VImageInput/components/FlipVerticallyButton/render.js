export default function(h, {parent}) {
	let {
		flipVertically,
		flipVerticallyIcon,
	} = parent;
	return h(
		'MyActionButton',
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
