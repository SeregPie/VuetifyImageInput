export default function(h, {
	data,
	parent,
}) {
	let {
		disabled,
		load,
	} = parent;
	let {style} = data;
	return h(
		'div',
		{
			style: {
				...style,
				backgroundColor: 'Red',
				...(disabled
					? {}
					: {cursor: 'pointer'}
				),
			},
			...(disabled
				? {}
				: {on: {
					click(event) {
						event.preventDefault();
						let input = document.createElement('input');
						input.setAttribute('type', 'file');
						input.addEventListener('change', event => {
							event.preventDefault();
							let {files} = event.target;
							if (files) {
								if (files.length) {
									load(files[0]);
								}
							}
						});
						input.click();
					},
				}}
			),
		},
		'click me',
	);
}
