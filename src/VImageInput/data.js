import Function_noop from '../core/Function/noop';

export default function() {
	return {
		dirtyZoom: 0,
		flippedHorizontally: false,
		flippedVertically: false,
		image: false,
		originalImageHeight: 800,
		originalImageWidth: 640,
		rotationTurns: 0,
		translationHorizontally: 0,
		translationVertically: 0,

		cancelLoad: Function_noop,
		loadError: false,
		loading: false,
		loadProgress: 0,
		loadSuccess: false,
	};
}
