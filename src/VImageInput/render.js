import checkeredBackgroundImage from './shared/checkeredBackgroundImage';

export default function($createElement) {
	let {
		clearable,
		image,
		imageHeight,
		imageWidth,
		notFlippable,
		notRotatable,
	} = this;
	if (image) {
		let imageElement = $createElement(
			'img',
			{
				attrs: {
					src: image.toDataURL(),
				},
			},
		);
		let buttonElements = [];
		if (clearable) {
			let {clear} = this;
			let clearButtonElement = $createElement('v-icon', 'clear');
			clearButtonElement = $createElement(
				'v-btn',
				{
					props: {
						flat: true,
						icon: true,
					},
					on: {
						click: clear,
					},
				},
				[clearButtonElement],
			);
			let spacerElement = $createElement('v-spacer');
			buttonElements.push(
				clearButtonElement,
				spacerElement,
			);
		}
		if (!notFlippable) {
			let {
				flipHorizontally,
				flipHorizontallyTooltip,
				flipVertically,
				flipVerticallyTooltip,
			} = this;
			let flipHorizontallyButtonElement = $createElement(
				'v-icon',
				{
					style: {
						transform: 'rotate(180deg)',
					},
				},
				'flip',
			);
			flipHorizontallyButtonElement = $createElement(
				'v-btn',
				{
					slot: 'activator',
					props: {
						flat: true,
						icon: true,
					},
					on: {
						click: flipHorizontally,
					},
				},
				[flipHorizontallyButtonElement],
			);
			flipHorizontallyButtonElement = $createElement(
				'v-tooltip',
				{
					props: {
						right: true,
					},
				},
				[
					flipHorizontallyButtonElement,
					$createElement('span', flipHorizontallyTooltip),
				],
			);
			let flipVerticallyButtonElement = $createElement(
				'v-icon',
				{
					style: {
						transform: 'rotate(90deg)',
					},
				},
				'flip',
			);
			flipVerticallyButtonElement = $createElement(
				'v-btn',
				{
					slot: 'activator',
					props: {
						flat: true,
						icon: true,
					},
					on: {
						click: flipVertically,
					},
				},
				[flipVerticallyButtonElement],
			);
			flipVerticallyButtonElement = $createElement(
				'v-tooltip',
				{
					props: {
						right: true,
					},
				},
				[
					flipVerticallyButtonElement,
					$createElement('span', flipVerticallyTooltip),
				],
			);
			buttonElements.push(
				flipHorizontallyButtonElement,
				flipVerticallyButtonElement,
			);
		}
		if (!notRotatable) {
			let {
				rotateClockwise,
				rotateClockwiseTooltip,
				rotateCounterclockwise,
				rotateCounterclockwiseTooltip,
			} = this;
			rotateClockwiseButtonElement = $createElement(
				'v-icon',
				{
					style: {
						transform: 'rotate(180deg)',
					},
				},
				'rotate_90_degrees_ccw',
			);
			let rotateClockwiseButtonElement = $createElement(
				'v-btn',
				{
					slot: 'activator',
					props: {
						flat: true,
						icon: true,
					},
					on: {
						click: rotateClockwise,
					},
				},
				[rotateClockwiseButtonElement],
			);
			rotateClockwiseButtonElement = $createElement(
				'v-tooltip',
				{
					props: {
						right: true,
					},
				},
				[
					rotateClockwiseButtonElement,
					$createElement('span', rotateClockwiseTooltip),
				],
			);
			let rotateCounterclockwiseButtonElement = $createElement('v-icon', 'rotate_90_degrees_ccw');
			rotateCounterclockwiseButtonElement = $createElement(
				'v-btn',
				{
					slot: 'activator',
					props: {
						flat: true,
						icon: true,
					},
					on: {
						click: rotateCounterclockwise,
					},
				},
				[rotateCounterclockwiseButtonElement],
			);
			rotateCounterclockwiseButtonElement = $createElement(
				'v-tooltip',
				{
					props: {
						right: true,
					},
				},
				[
					rotateCounterclockwiseButtonElement,
					$createElement('span', rotateCounterclockwiseTooltip),
				],
			);
			buttonElements.push(
				rotateClockwiseButtonElement,
				rotateCounterclockwiseButtonElement,
			);
		}
		if (buttonElements.length > 0) {
			let buttonsContainerElement = $createElement(
				'div',
				{
					style: {
						alignItems: 'center',
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'wrap',
						justifyContent: 'center',
					},
				},
				buttonElements,
			);
			let imageContainerElement = $createElement(
				'div',
				{
					style: {
						alignItems: 'center',
						backgroundImage: checkeredBackgroundImage,
						backgroundRepeat: 'repeat',
						backgroundSize: '16px 16px',
						display: 'flex',
						height: `${imageHeight}px`,
						justifyContent: 'center',
						width: `${imageWidth}px`,
					},
				},
				[imageElement],
			);
			let layoutElement = $createElement(
				'div',
				{
					style: {
						display: 'flex',
					},
				},
				[
					imageContainerElement,
					buttonsContainerElement,
				],
			);
			let wrapperElement = $createElement(
				'div',
				{
					style: {
						display: 'inline',
					},
				},
				[layoutElement],
			);
			return wrapperElement;
		}
		return imageElement;
	}
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
				click: this.upload,
			},
		},
		[uploadIconElement],
	);
	let uploadButtonContainerElement = $createElement(
		'div',
		{
			style: {
				alignItems: 'center',
				backgroundColor: '#eeeeee',
				border: '1px dashed #bdbdbd',
				borderRadius: '8px',
				display: 'inline-flex',
				height: `${imageHeight}px`,
				justifyContent: 'center',
				width: `${imageWidth}px`,
			},
		},
		[uploadButtonElement],
	);
	return uploadButtonContainerElement;
}
