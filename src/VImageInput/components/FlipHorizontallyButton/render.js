export default function(h, {parent}) {
	let {
		flipHorizontally,
		flipHorizontallyIcon,
	} = parent;
	return h(
		'MyActionButton',
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
