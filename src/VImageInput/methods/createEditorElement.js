export default function() {
	let {
		$createElement,
		clearable,
		hideActions,
	} = this;
	let element = this.createCropperElement();
	let elementChildren = [];
	if (clearable) {
		elementChildren.push(
			this.createClearButtonElement(),
			$createElement('v-spacer'),
		);
	}
	if (!hideActions) {
		elementChildren.push(
			this.createFlipHorizontallyButtonElement(),
			this.createFlipVerticallyButtonElement(),
			this.createRotateClockwiseButtonElement(),
			this.createRotateCounterclockwiseButtonElement(),
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
