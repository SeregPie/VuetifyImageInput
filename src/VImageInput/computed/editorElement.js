export default function() {
	let {
		$createElement,
		clearable,
		cropperElement,
		showActions,
	} = this;
	let toolbarElementChildren = [];
	if (clearable) {
		let {clearButtonElement} = this;
		toolbarElementChildren.push(
			clearButtonElement,
			$createElement('v-spacer'),
		);
	}
	if (showActions) {
		let {
			flipHorizontallyButtonElement,
			flipVerticallyButtonElement,
			rotateClockwiseButtonElement,
			rotateCounterclockwiseButtonElement,
		} = this;
		toolbarElementChildren.push(
			flipHorizontallyButtonElement,
			flipVerticallyButtonElement,
			rotateClockwiseButtonElement,
			rotateCounterclockwiseButtonElement,
		);
	}
	if (toolbarElementChildren.length) {
		let toolbarElement = $createElement(
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
		);
		let containerElement = $createElement(
			'div',
			{
				style: {
					display: 'flex',
				},
			},
			[
				cropperElement,
				toolbarElement,
			],
		);
		return containerElement;
	}
	return cropperElement;
}
