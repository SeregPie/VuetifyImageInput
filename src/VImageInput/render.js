export default function(createElement) {
	let {
		imageWidth,
		imageHeight,
		internalValue,
		clearable,
	} = this;

	if (internalValue) {
		let imageElement = createElement('img', {
			attrs: {
				src: internalValue,
			},
		});
		let buttonElements = [];
		if (clearable) {
			let clearIconElement = createElement('v-icon', 'clear');
			let clearButtonElement = createElement('v-btn', {
				props: {
					flat: true,
					icon: true,
				},
				on: {
					click: this.clear,
				},
			}, [clearIconElement]);
			buttonElements.push(clearButtonElement);
		}
		if (buttonElements.length > 0) {
			let buttonsContainerElement = createElement('div', buttonElements);
			let imageContainerElement = createElement('div', {
				style: {
					flex: '1 1 0%',
				},
			}, [imageElement]);
			let mainElement = createElement('div', {
				style: {
					display: 'flex',
				},
			}, [
				imageContainerElement,
				buttonsContainerElement,
			]);
			return mainElement;
		}
		return imageElement;
	} else {
		let uploadIconElement = createElement('v-icon', 'cloud_upload');
		let uploadButtonElement = createElement('v-btn', {
			props: {
				fab: true,
				large: true,
			},
			on: {
				click: this.uploadImage,
			},
		}, [uploadIconElement]);
		let mainElement = createElement('div', {
			style: {
				width: `${imageWidth}px`,
				height: `${imageHeight}px`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			},
		}, [uploadButtonElement]);
		return mainElement;
	}
}
