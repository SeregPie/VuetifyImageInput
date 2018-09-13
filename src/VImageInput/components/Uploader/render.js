import Function_cast from '/utils/Function/cast';

export default function($createElement) {
	return $createElement(
		'div',
		{
			style: {
				alignItems: 'center',
				//backgroundColor: '#fff',
				border: `1px dashed rgba(${this.theme.isDark ? '255,255,255,0.7' : '0,0,0,0.54'})`,
				borderRadius: '6px',
				cursor: 'pointer',
				display: 'flex',
				justifyContent: 'center',
			},
			on: {
				dragleave: this.onDragLeave,
				dragover: this.onDragOver,
				drop: this.onDrop,
				click: this.onClick,
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
						change: this.onChange,
					},
					ref: 'input',
				},
			),
			$createElement(
				'v-icon',
				{
					style: Function_cast(this.uploadIconStyle).call(this),
					props: {
						large: true,
					},
				},
				Function_cast(this.uploadIcon).call(this),
			),
		],
	);
}
