import Function_cast from '/utils/Function/cast';

import checkeredBackgroundImage from './shared/checkeredBackgroundImage';

export default function($createElement) {
	let {
		clearable,
		image,
		imageHeight,
		imageWidth,
		hideActions,
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
			let {
				clear,
				clearIcon,
			} = this;
			clearIcon = Function_cast(clearIcon).call(this);
			let clearButtonElement = $createElement('v-icon', clearIcon);
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
		if (!hideActions) {
			let {
				flipHorizontally,
				flipHorizontallyIcon,
				flipHorizontallyIconStyle,
				flipHorizontallyText,
				flipVertically,
				flipVerticallyIcon,
				flipVerticallyIconStyle,
				flipVerticallyText,
				rotateClockwise,
				rotateClockwiseIcon,
				rotateClockwiseIconStyle,
				rotateClockwiseText,
				rotateCounterclockwise,
				rotateCounterclockwiseIcon,
				rotateCounterclockwiseIconStyle,
				rotateCounterclockwiseText,
			} = this;
			flipHorizontallyIcon = Function_cast(flipHorizontallyIcon).call(this);
			flipVerticallyIcon = Function_cast(flipVerticallyIcon).call(this);
			rotateClockwiseIcon = Function_cast(rotateClockwiseIcon).call(this);
			rotateCounterclockwiseIcon = Function_cast(rotateCounterclockwiseIcon).call(this);
			flipHorizontallyIconStyle = Function_cast(flipHorizontallyIconStyle).call(this);
			flipVerticallyIconStyle = Function_cast(flipVerticallyIconStyle).call(this);
			rotateClockwiseIconStyle = Function_cast(rotateClockwiseIconStyle).call(this);
			rotateCounterclockwiseIconStyle = Function_cast(rotateCounterclockwiseIconStyle).call(this);
			let flipHorizontallyButtonElement = $createElement(
				'v-icon',
				{
					style: flipHorizontallyIconStyle,
				},
				flipHorizontallyIcon,
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
					$createElement('span', flipHorizontallyText),
				],
			);
			let flipVerticallyButtonElement = $createElement(
				'v-icon',
				{
					style: flipVerticallyIconStyle,
				},
				flipVerticallyIcon,
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
					$createElement('span', flipVerticallyText),
				],
			);
			buttonElements.push(
				flipHorizontallyButtonElement,
				flipVerticallyButtonElement,
			);
			rotateClockwiseButtonElement = $createElement(
				'v-icon',
				{
					style: rotateClockwiseIconStyle,
				},
				rotateClockwiseIcon,
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
					$createElement('span', rotateClockwiseText),
				],
			);
			let rotateCounterclockwiseButtonElement = $createElement(
				'v-icon',
				{
					style: rotateCounterclockwiseIconStyle,
				},
				rotateCounterclockwiseIcon,
			);
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
					$createElement('span', rotateCounterclockwiseText),
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
