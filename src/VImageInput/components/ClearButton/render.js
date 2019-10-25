export default function(h, {parent}) {
	return h(
		'MyActionButton',
		{
			props: {
				icon: parent.clearIcon,
				iconStyle: parent.clearIconStyle,
			},
			on: {
				click: parent.clear,
			},
		},
	);
}
