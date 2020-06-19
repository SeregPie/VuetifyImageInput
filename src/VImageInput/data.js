import Function_noop from '../core/Function/noop';

export default function() {
	let {
		imageHeight,
		imageWidth,
	} = this;
	return {
		animated: true,
		cancellation: Function_noop,
		dirtyImageHeight: imageHeight,
		dirtyImageWidth: imageWidth,
		dirtyTranslationHorizontally: 0,
		dirtyTranslationVertically: 0,
		dirtyZoom: 0,
		flippedHorizontally: false,
		flippedVertically: false,
		internalImage: false,
		internalImageHeight: 0,
		internalImageWidth: 0,
		loadError: false,
		loading: false,
		loadProgress: 0,
		loadSuccess: false,
		rotationInTurns: 0,
		showImageSize: false,
	};
}
