import Function_noop from '../core/Function/noop';

export default function() {
	return {
		cancelLoad: Function_noop,
		frozenOriginalImage: Object.freeze({value: null}),
		loadError: false,
		loading: false,
		loadProgress: 0,
		loadSuccess: false,
	};
}
