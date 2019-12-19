import Function_noop from '../core/Function/noop';

export default function() {
	return {
		cancel: Function_noop,
		loadError: false,
		loadSuccess: false,
		loading: false,
		originalImage: null,
		originalImageDataURL: null,
		originalImageHeight: 0,
		originalImageWidth: 0,
		progress: 0,
	};
}
