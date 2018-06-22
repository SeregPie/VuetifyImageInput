export default function(createElement) {
	let {
		clearable,
		flippable,
		image,
		imageHeight,
		imageWidth,
		rotatable,
	} = this;

	if (image) {
		let imageElement = createElement(
			'img',
			{
				attrs: {
					src: image.toDataURL(),
				},
			},
		);
		let buttonElements = [];
		if (clearable) {
			let clearIconElement = createElement('v-icon', 'clear');
			let clearButtonElement = createElement(
				'v-btn',
				{
					props: {
						flat: true,
						icon: true,
					},
					on: {
						click: this.clear,
					},
				},
				[clearIconElement],
			);
			let spacerElement = createElement('v-spacer');
			buttonElements.push(
				clearButtonElement,
				spacerElement,
			);
		}
		if (flippable) {
			let flipHorizontallyIconElement = createElement(
				'v-icon',
				{
					style: {
						transform: 'rotate(180deg)',
					},
				},
				'flip',
			);
			let flipHorizontallyButtonElement = createElement(
				'v-btn',
				{
					slot: 'activator',
					props: {
						flat: true,
						icon: true,
					},
					on: {
						click: this.flipHorizontally,
					},
				},
				[flipHorizontallyIconElement],
			);
			let flipHorizontallyTooltip = createElement(
				'v-tooltip',
				{
					props: {
						right: true,
					},
				},
				[
					flipHorizontallyButtonElement,
					createElement('span', 'flip horizontally'),
				],
			);
			let flipVerticallyIconElement = createElement(
				'v-icon',
				{
					style: {
						transform: 'rotate(90deg)',
					},
				},
				'flip',
			);
			let flipVerticallyButtonElement = createElement(
				'v-btn',
				{
					slot: 'activator',
					props: {
						flat: true,
						icon: true,
					},
					on: {
						click: this.flipVertically,
					},
				},
				[flipVerticallyIconElement],
			);
			let flipVerticallyTooltip = createElement(
				'v-tooltip',
				{
					props: {
						right: true,
					},
				},
				[
					flipVerticallyButtonElement,
					createElement('span', 'flip vertically'),
				],
			);
			buttonElements.push(
				flipHorizontallyTooltip,
				flipVerticallyTooltip,
			);
		}
		if (rotatable) {
			let rotateClockwiseIconElement = createElement(
				'v-icon',
				{
					style: {
						transform: 'rotate(180deg)',
					},
				},
				'rotate_90_degrees_ccw',
			);
			let rotateClockwiseButtonElement = createElement(
				'v-btn',
				{
					slot: 'activator',
					props: {
						flat: true,
						icon: true,
					},
					on: {
						click: this.rotateClockwise,
					},
				},
				[rotateClockwiseIconElement],
			);
			let rotateClockwiseTooltip = createElement(
				'v-tooltip',
				{
					props: {
						right: true,
					},
				},
				[
					rotateClockwiseButtonElement,
					createElement('span', 'rotate clockwise'),
				],
			);
			let rotateCounterclockwiseIconElement = createElement('v-icon', 'rotate_90_degrees_ccw');
			let rotateCounterclockwiseButtonElement = createElement(
				'v-btn',
				{
					slot: 'activator',
					props: {
						flat: true,
						icon: true,
					},
					on: {
						click: this.rotateCounterclockwise,
					},
				},
				[rotateCounterclockwiseIconElement],
			);
			let rotateCounterclockwiseTooltip = createElement(
				'v-tooltip',
				{
					props: {
						right: true,
					},
				},
				[
					rotateCounterclockwiseButtonElement,
					createElement('span', 'rotate counterclockwise'),
				],
			);
			buttonElements.push(
				rotateClockwiseTooltip,
				rotateCounterclockwiseTooltip,
			);
		}
		if (buttonElements.length > 0) {
			let buttonsContainerElement = createElement(
				'div',
				{
					style: {
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'wrap',
						justifyContent: 'center',
						alignItems: 'center',
					},
				},
				buttonElements,
			);
			let imageContainerElement = createElement(
				'div',
				{
					style: {
						width: `${imageWidth}px`,
						height: `${imageHeight}px`,
						backgroundColor: '#000000',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					},
				},
				[imageElement],
			);
			let mainElement = createElement(
				'div',
				{
					style: {
						display: 'inline-flex',
					},
				},
				[
					imageContainerElement,
					buttonsContainerElement,
				],
			);
			return mainElement;
		}
		return imageElement;
	}
	let uploadIconElement = createElement('v-icon', 'cloud_upload');
	let uploadButtonElement = createElement(
		'v-btn',
		{
			props: {
				color: 'primary',
				fab: true,
				large: true,
			},
			on: {
				click: this.upload,
			},
		},
		[uploadIconElement],
	);
	let uploadButtonContainerElement = createElement(
		'div',
		{
			style: {
				width: `${imageWidth}px`,
				height: `${imageHeight}px`,
				border: '1px dashed #bdbdbd',
				borderRadius: '8px',
				backgroundColor: '#eeeeee',
				display: 'inline-flex',
				justifyContent: 'center',
				alignItems: 'center',
			},
		},
		[uploadButtonElement],
	);
	return uploadButtonContainerElement;
}
