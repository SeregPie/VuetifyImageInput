import VueFileUpload from '../../../VueFileUpload';

export default function(h, {
	data,
	listeners,
	parent,
}) {
	let {
		disabled,
		errorIcon,
		errorIconStyle,
		successIcon,
		successIconStyle,
		uploadIcon,
		uploadIconStyle,
	} = parent;
	let {load} = listeners;
	let {style} = data;
	return h(
		VueFileUpload,
		{
			style,
			props: {
				disabled,
			},
			scopedSlots: {
				default: (({
					dragging,
					failed,
					file,
					loaded,
					loading,
					on,
					progress,
				}) => {
					return h(
						'VCard',
						{
							style: {
								alignItems: 'center',
								display: 'flex',
								height: '100%',
								justifyContent: 'center',
								width: '100%',
							},
							props: {
								disabled,
								outlined: true,
							},
							on,
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
											width: 4,
										},
									},
									text,
								);
							}
							let style;
							let color;
							let text;
							if (loaded) {
								style = successIconStyle;
								color = 'success';
								text = successIcon;
							} else
							if (failed) {
								style = errorIconStyle;
								color = 'error';
								text = errorIcon;
							} else {
								style = uploadIconStyle;
								if (dragging) {
									color = 'primary';
								}
								text = uploadIcon;
							}
							return h(
								'VIcon',
								{
									style,
									props: {
										color,
										disabled,
										large: true,
									},
								},
								text,
							);
						})()],
					);
				}),
			},
			on: {
				load,
			},
		},
	);
}
