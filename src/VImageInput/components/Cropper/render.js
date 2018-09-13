export default function($createElement) {
	let {
		checkeredBackground,
		data,
		disabled,
		flipHorizontally,
		flipVertically,
		height,
		rotate,
		width,
	} = this;
	return $createElement(
		'div',
		{
			style: {
				alignItems: 'center',
				background: checkeredBackground,
				display: 'flex',
				justifyContent: 'center',
				overflow: 'hidden',
				padding: '50px',
				position: 'relative',
			},
		},
		[
			$createElement(
				'img',
				{
					style: {
						left: '50%',
						position: 'absolute',
						top: '50%',
						transform: [
							'translate(-50%,-50%)',
							`scale(${[
								flipHorizontally ? -1 : 1,
								flipVertically ? -1 : 1,
							].join(',')})`,
							`rotate(${rotate * 90}deg)`,
						].join(' '),
						...(disabled ? {opacity: '0.5'} : {}),
					},
					attrs: {
						src: data,
					},
				},
			),
			$createElement(
				'div',
				{
					style: {
						border: '4px solid #fff',
						boxShadow: '0 0 9999px 9999px rgba(0,0,0,0.5)',
						height: `${height}px`,
						position: 'relative',
						width: `${width}px`,
					},
				},
			),
		],
	);
}
