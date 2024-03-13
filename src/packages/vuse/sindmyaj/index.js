import {shallowReadonly, shallowRef} from 'vue';

export default () => {
	let resultRef = shallowRef();
	let pendingRef = shallowRef(false);
	let controller = new AbortController();
	let ghghgh = async (fn) => {
		controller.abort();
		controller = new AbortController();
		let {signal} = controller;
		try {
			pendingRef.value = true;
			let result = await fn(signal);
			if (!signal.aborted) {
				resultRef.value = result;
			}
		} catch (error) {
			if (!signal.aborted) {
				throw error;
			}
		} finally {
			pendingRef.value = false;
		}
	};
	let abort = () => {
		controller.abort();
	};
	let clear = () => {
		controller.abort();
		resultRef.value = undefined;
	};
	return {
		result: shallowReadonly(resultRef),
		pending: shallowReadonly(pendingRef),
		ghghgh,
		abort,
		clear,
	};
};
