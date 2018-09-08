export default function($createElement, image) {
	let {
		clearable,
		hideActions,
	} = this;
	let element = this.createCropperElement($createElement, image);
	let elementChildren = [];
	if (clearable) {
		elementChildren.push(
			this.createClearButtonElement($createElement),
			$createElement('v-spacer'),
		);
	}
	if (!hideActions) {
		elementChildren.push(
			this.createFlipHorizontallyButtonElement($createElement),
			this.createFlipVerticallyButtonElement($createElement),
			this.createRotateClockwiseButtonElement($createElement),
			this.createRotateCounterclockwiseButtonElement($createElement),
		);
	}
	if (elementChildren.length) {
		element = $createElement(
			'div',
			{
				style: {
					display: 'flex',
				},
			},
			[
				element,
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
					elementChildren,
				),
			],
		);
	}
	return element;
}
