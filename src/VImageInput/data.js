import Function_noop from '../core/Function/noop';

export default function() {
	return {
		cancel: Function_noop,
		failed: false,
		loaded: false,
		loading: false,
		originalImageDataURL: null,
		originalImageHeight: 0,
		originalImageWidth: 0,
		progress: 0,
	};
}
