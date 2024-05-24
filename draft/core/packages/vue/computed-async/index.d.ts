import {ComputedRef} from 'vue';

import {Eqjcsyaa, Vzrunpio} from '../../ts';

export type ComputedAsyncOptions<T> = Partial<{
	initial: T;
	onError: Eqjcsyaa<unknown>;
}>;

export type ComputedAsyncRef<T> = ComputedRef<T> & {
	get pending(): boolean;
	abort(): void;
};

export type ComputedAsyncFn<T> = {
	(onAbort: {(fn: Vzrunpio): void}): Promise<T>;
};

export const computedAsync: {
	<T>(
		fn: ComputedAsyncFn<T>,
		options?: ComputedAsyncOptions<T>,
	): ComputedAsyncRef<T>;
};
