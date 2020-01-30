export default function(h, {
	listeners,
	parent,
	props,
}) {
	let {disabled} = parent;
	let {icon} = props;
	return h(
		'VBtn',
		{
			class: 'ma-1',
			props: {
				dark: true,
				disabled,
				flat: true,
				icon: true,
			},
			on: listeners,
		},
		[h(
			'VIcon',
			icon,
		)],
	);
}
