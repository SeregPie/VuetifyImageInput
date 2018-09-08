import Function_cast from '/utils/Function/cast';

export default function($createElement) {
	let {
		disabled,
		readonly,
		upload,
		uploadIcon,
		uploadIconStyle,
	} = this;
	uploadIcon = Function_cast(uploadIcon).call(this);
	uploadIconStyle = Function_cast(uploadIconStyle).call(this);
	return $createElement(
		'v-card',
		{
			props: {
				flat: true,
			},
			style: {
				alignItems: 'center',
				bottom: 0,
				display: 'flex',
				justifyContent: 'center',
				left: 0,
				position: 'absolute',
				right: 0,
				top: 0,
			},
		},
		[$createElement(
			'v-btn',
			{
				props: {
					color: 'primary',
					disabled: disabled || readonly,
					fab: true,
					large: true,
				},
				on: {
					click: upload,
				},
			},
			[$createElement(
				'v-icon',
				{
					style: uploadIconStyle,
				},
				uploadIcon,
			)],
		)],
	);
}
