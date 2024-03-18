import {ComputedRef, Ref, computed, shallowReadonly, shallowRef, watchEffect} from 'vue';

let noop = () => {};

export type ComputedAsyncOptions = Partial<{
	onError(error: unknown): any;
}>;

computed

export type ComputedAsyncRef<T> = ComputedRef<T> & {
	get pending(): boolean;
	abort(): void;
};

export function computedAsync<T>(
	fn: {(onAbort: {(fn: {(): any}): void}): Promise<T>},
	initialValue: T,
	{onError = noop}: ComputedAsyncOptions = {},
) {
	let resultRef = shallowRef(initialValue);
	let pendingRef = shallowRef(false);
	let abort = noop;
	watchEffect(async (onCleanup) => {
		let controller = new AbortController();
		onCleanup(
			(abort = () => {
				controller.abort();
			}),
		);
		let {signal} = controller;
		try {
			pendingRef.value = true;
			try {
				let result = await fn((onAbort) => {
					signal.addEventListener('abort', onAbort);
				});
				if (!signal.aborted) {
					resultRef.value = result;
				}
			} catch (error) {
				if (!signal.aborted) {
					onError(error);
				}
			}
		} finally {
			pendingRef.value = false;
		}
	});
	return Object.assign(shallowReadonly(resultRef), {
		get pending() {
			return pendingRef.value;
		},
		abort() {
			abort();
		},
	});
}

/*
let imageRef = computedAsync(
	async (onAbort) => {
		let src = gyctthkvRef.value;
		if (src == null) {
			return null;
		}
		let controller = new AbortController();
		onAbort(() => {
			controller.abort();
		});
		let {signal} = controller;
		return await pmyivsgp(src, {signal});
	},
	null,
	{
		onError(error) {
			emit('error', error);
		},
	},
);
*/