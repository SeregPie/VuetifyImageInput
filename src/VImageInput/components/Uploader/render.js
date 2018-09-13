import Function_cast from '/utils/Function/cast';

export default function($createElement) {
	let {
		onChange,
		onClick,
		onDragLeave,
		onDragOver,
		onDrop,
		theme,
		uploadIcon,
		uploadIconStyle,
	} = this;
	uploadIcon = Function_cast(uploadIcon).call(this);
	uploadIconStyle = Function_cast(uploadIconStyle).call(this);
	return $createElement(
		'div',
		{
			style: {
				alignItems: 'center',
				//backgroundColor: '#fff',
				border: `1px dashed rgba(${theme.isDark ? '255,255,255,0.7' : '0,0,0,0.54'})`,
				borderRadius: '6px',
				cursor: 'pointer',
				display: 'flex',
				justifyContent: 'center',
			},
			on: {
				dragleave: onDragLeave,
				dragover: onDragOver,
				drop: onDrop,
				click: onClick,
			},
		},
		[
			$createElement(
				'input',
				{
					style: {
						display: 'none',
					},
					attrs: {
						type: 'file',
					},
					on: {
						change: onChange,
					},
					ref: 'input',
				},
			),
			$createElement(
				'v-icon',
				{
					style: uploadIconStyle,
					props: {
						large: true,
					},
				},
				uploadIcon,
			),
		],
	);
}
