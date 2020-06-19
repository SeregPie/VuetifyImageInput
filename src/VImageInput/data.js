import Function_noop from '../core/Function/noop';

export default function() {
	return {
		animated: true,
		cancellation: Function_noop,
		dirtyImageHeight: this.imageHeight,
		dirtyImageWidth: this.imageWidth,
		dirtyTranslationHorizontally: 0,
		dirtyTranslationVertically: 0,
		dirtyZoom: 0,
		flippedHorizontally: false,
		flippedVertically: false,
		internalImage: null,
		loadError: false,
		loading: false,
		loadProgress: 0,
		loadSuccess: false,
		rotationInTurns: 0,
		showImageSize: false,
	};
}
