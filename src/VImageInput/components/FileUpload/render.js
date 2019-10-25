import VueFileUpload from '../../../VueFileUpload';

export default function(h, {
	data,
	injections,
	listeners,
	parent,
}) {
	let {
		disabled,
		uploadIcon,
		uploadIconStyle,
	} = parent;
	let {theme} = injections;
	let {load} = listeners;
	let {style} = data;
	return h(
		VueFileUpload,
		{
			style,
			scopedSlots: {
				default: (({
					cancel,
					dragging,
					failed,
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
					[h(
						'VIcon',
						{
							large: true,
							style: uploadIconStyle,
						},
						uploadIcon,
					)],
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
