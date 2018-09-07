import Function_cast from '/utils/Function/cast';

export default function() {
	let {
		$createElement,
		clear,
		clearIcon,
	} = this;
	clearIcon = Function_cast(clearIcon).call(this);
	return $createElement(
		'v-btn',
		{
			props: {
				flat: true,
				icon: true,
			},
			on: {
				click: clear,
			},
		},
		[$createElement('v-icon', clearIcon)],
	);
}
