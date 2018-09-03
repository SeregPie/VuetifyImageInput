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
		let createActionButtonElement = ((action, icon, iconStyle, text) => {
			text = Function_cast(text).call(this);
			icon = Function_cast(icon).call(this);
			iconStyle = Function_cast(iconStyle).call(this);
			let iconElement = $createElement(
				'v-icon',
				{
					style: iconStyle,
				},
				icon,
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
			let setButtonElement = (() => {
				buttonElement = $createElement(
					'v-btn',
					buttonElementOptions,
					[iconElement],
				);
			})
			if (text) {
				buttonElementOptions.slot = 'activator';
				setButtonElement();
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
				setButtonElement();
			}
			return buttonElement;
		});
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
			actionButtonElements.push(
				createActionButtonElement(
					clear,
					clearIcon,
				),
				$createElement('v-spacer'),
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
			actionButtonElements.push(
				createActionButtonElement(
					flipHorizontally,
					flipHorizontallyIcon,
					flipHorizontallyIconStyle,
					flipHorizontallyText,
				),
				createActionButtonElement(
					flipVertically,
					flipVerticallyIcon,
					flipVerticallyIconStyle,
					flipVerticallyText,
				),
				createActionButtonElement(
					rotateClockwise,
					rotateClockwiseIcon,
					rotateClockwiseIconStyle,
					rotateClockwiseText,
				),
				createActionButtonElement(
					rotateCounterclockwise,
					rotateCounterclockwiseIcon,
					rotateCounterclockwiseIconStyle,
					rotateCounterclockwiseText,
				),
			);
		}
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
		if (actionButtonElements.length) {
			let actionButtonsContainerElement = $createElement(
				'div',
				{
					style: {
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'wrap',
						justifyContent: 'center',
					},
				},
				actionButtonElements,
			);
			let wrapperElement = $createElement(
				'div',
				{
					style: {
						display: 'inline-flex',
					},
				},
				[
					imageContainerElement,
					actionButtonsContainerElement,
				],
			);
			return wrapperElement;
		}
		return imageContainerElement;
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
