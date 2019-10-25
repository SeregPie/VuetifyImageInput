import Function_noop from '../core/Function/noop';

export default function() {
	return {
		cancel: Function_noop,
		dragging: false,
		error: null,
		failed: false,
		file: null,
		loaded: false,
		loading: false,
		progress: 0,
		result: null,
	};
}
