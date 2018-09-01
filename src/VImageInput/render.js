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
		let actionButtonElements = [];
		if (clearable) {
			let {
				clear,
				clearIcon,
			} = this;
			clearIcon = Function_cast(clearIcon).call(this);
			let clearIconElement = $createElement('v-icon', clearIcon);
			let clearButtonElement = $createElement(
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
				[clearIconElement],
			);
			let spacerElement = $createElement('v-spacer');
			actionButtonElements.push(
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
			let createActionButtonElement = ((text, icon, iconStyle, action) => {
				text = Function_cast(text).call(this);
				icon = Function_cast(icon).call(this);
				iconStyle = Function_cast(iconStyle).call(this);
				let iconElement = $createElement(
					'v-icon',
					{
						style: iconStyle,
					},
					flipHorizontallyIcon,
				);
				let buttonElementOptions = {
					props: {
						flat: true,
						icon: true,
					},
					on: {
						click: action,
					},
				};
				let buttonElement;
				if (text) {
					buttonElementOptions.slot = 'activator';
					buttonElement = $createElement(
						'v-btn',
						buttonElementOptions,
						[iconElement],
					);
					buttonElement = $createElement(
						'v-tooltip',
						{
							props: {
								right: true,
							},
						},
						[
							buttonElement,
							$createElement('span', text),
						],
					);
				} else {
					buttonElement = $createElement(
						'v-btn',
						buttonElementOptions,
						[iconElement],
					);
				}
				return buttonElement;
			});
			actionButtonElements.push(
				createActionButtonElement(
					flipHorizontallyText,
					flipHorizontallyIcon,
					flipHorizontallyIconStyle,
					flipHorizontally,
				),
				createActionButtonElement(
					flipVerticallyText,
					flipVerticallyIcon,
					flipVerticallyIconStyle,
					flipVertically,
				),
				createActionButtonElement(
					rotateClockwiseText,
					rotateClockwiseIcon,
					rotateClockwiseIconStyle,
					rotateClockwise,
				),
				createActionButtonElement(
					rotateCounterclockwiseText,
					rotateCounterclockwiseIcon,
					rotateCounterclockwiseIconStyle,
					rotateCounterclockwise,
				),
			);
		}
		if (actionButtonElements.length) {
			let actionButtonsContainerElement = $createElement(
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
				actionButtonElements,
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
					actionButtonsContainerElement,
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
