export default function($createElement, image) {
	let {
		clearable,
		hideActions,
	} = this;
	let toolbarElementChildren = [];
	if (clearable) {
		toolbarElementChildren.push(
			this.createClearButtonElement($createElement),
			$createElement('v-spacer'),
		);
	}
	if (!hideActions) {
		toolbarElementChildren.push(
			this.createFlipHorizontallyButtonElement($createElement),
			this.createFlipVerticallyButtonElement($createElement),
			this.createRotateClockwiseButtonElement($createElement),
			this.createRotateCounterclockwiseButtonElement($createElement),
		);
	}
	return $createElement(
		'div',
		{
			style: {
				display: 'flex',
				minHeight: '100%',
				minWidth: '100%',
			},
		},
		[
			this.createCropperElement($createElement, image),
			$createElement(
				'div',
				{
					style: {
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'wrap',
						justifyContent: 'center',
					},
				},
				toolbarElementChildren,
			),
		],
	);
}
