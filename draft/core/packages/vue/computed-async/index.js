import {computed, shallowRef, watchEffect} from 'vue';

let {AbortController} = globalThis;

export let computedAsync = (fn, {initial: value, onError}) => {
	let valueRef = shallowRef(value);
	let pendingRef = shallowRef(false);
	let abortFn = () => {};
	watchEffect(async (onCleanup) => {
		let controller = new AbortController();
		// prettier-ignore
		onCleanup(abortFn = () => {
			controller.abort();
		});
		let {signal} = controller;
		try {
			{
				pendingRef.value = true;
			}
			let value = await fn((onAbort) => {
				signal.addEventListener('abort', onAbort);
			});
			if (!signal.aborted) {
				valueRef.value = value;
			}
		} catch (error) {
			if (!signal.aborted) {
				onError(error);
			}
		} finally {
			if (!signal.aborted) {
				pendingRef.value = false;
			}
		}
	});
	return Object.assign(
		computed(() => valueRef.value),
		{
			get pending() {
				return pendingRef.value;
			},
			abort() {
				abortFn();
			},
		},
	);
};
