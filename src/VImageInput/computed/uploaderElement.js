export default function() {
	let {
		$createElement,
		upload,
	} = this;
	let uploadIconElement = $createElement('v-icon', 'cloud_upload');
	let uploadButtonElement = $createElement(
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
		[uploadIconElement],
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
		[uploadButtonElement],
	);
	return uploaderElement;
}
