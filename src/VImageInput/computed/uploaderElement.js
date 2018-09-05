import Function_cast from '/utils/Function/cast';

export default function() {
	let {
		$createElement,
		upload,
		uploadIcon,
		uploadIconStyle,
	} = this;
	uploadIcon = Function_cast(uploadIcon).call(this);
	uploadIconStyle = Function_cast(uploadIconStyle).call(this);
	let iconElement = $createElement(
		'v-icon',
		{
			style: uploadIconStyle,
		},
		uploadIcon,
	);
	let buttonElement = $createElement(
		'v-btn',
		{
			props: {
				color: 'primary',
				fab: true,
				large: true,
			},
			on: {
				click: upload,
			},
		},
		[iconElement],
	);
	let uploaderElement = $createElement(
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
		[buttonElement],
	);
	return uploaderElement;
}
