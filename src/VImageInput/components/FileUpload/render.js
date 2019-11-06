import VueFileUpload from '../../../VueFileUpload';

export default function(h, {
	data,
	listeners,
	parent,
}) {
	let {
		disabled,
		uploadIcon,
		uploadIconStyle,
		theme,
	} = parent;
	let {load} = listeners;
	let {style} = data;
	return h(
		VueFileUpload,
		{
			style,
			scopedSlots: {
				default: (({
					dragging,
					failed,
					file,
					loaded,
					loading,
					onClick,
					onDragEnter,
					onDragLeave,
					onDragOver,
					onDrop,
					progress,
				}) => h(
					'div',
					{
						style: {
							alignItems: 'center',
							border: `1px dashed rgba(${theme.isDark ? '255,255,255,0.7' : '0,0,0,0.54'})`,
							borderRadius: '6px',
							display: 'flex',
							height: '100%',
							justifyContent: 'center',
							width: '100%',
							...(disabled
								? {}
								: {cursor: 'pointer'}
							),
						},
						...(disabled
							? {}
							: {on: {
								click: onClick,
								dragenter: onDragEnter,
								dragleave: onDragLeave,
								dragover: onDragOver,
								drop: onDrop,
							}}
						),
					},
					[(() => {
						if (loading) {
							let indeterminate;
							let value = progress / file.size * 100;
							let text;
							if (value) {
								text = `${Math.round(value)}%`;
							} else {
								indeterminate = true;
							}
							return h(
								'VProgressCircular',
								{
									props: {
										color: 'primary',
										indeterminate,
										rotate: -90,
										size: 64,
										value,
										width: 8,
									},
								},
								text,
							);
						}
						let style;
						let color;
						let text;
						if (loaded) {
							color = 'success';
							text = '$success';
						} else
						if (failed) {
							color = 'error';
							text = '$error';
						} else {
							if (dragging) {
								color = 'primary';
							}
							style = uploadIconStyle;
							text = uploadIcon;
						}
						return h(
							'VIcon',
							{
								style,
								props: {
									color,
									large: true,
								},
							},
							text,
						);
					})()],
				)),
			},
			on: {
				load: (({result}) => {
					load(result);
				}),
			},
		},
	);
}
