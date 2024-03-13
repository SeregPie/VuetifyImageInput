import {Ref} from 'vue';

declare const d: {
	<T>(): {
		result: Readonly<Ref<undefined | T>>;
		pending: Readonly<Ref<boolean>>;
		ghghgh: {
			(fn: {(signal: AbortSignal): Promise<T>}): Promise<void>;
		};
		abort: {(): void};
		clear: {(): void};
	};
};
export default d;
