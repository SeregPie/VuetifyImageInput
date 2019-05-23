export default function(h) {
	return h(
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
			h(
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
			h(
				'VIcon',
				{
					style: this.uploadIconStyle,
					props: {
						large: true,
					},
				},
				this.uploadIcon,
			),
		],
	);
}
