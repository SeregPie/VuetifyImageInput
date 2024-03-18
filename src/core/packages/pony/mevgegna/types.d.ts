declare const d: {
	<T>(
		signal: AbortSignal,
		fn: {(onAbort: {(fn: {(): any}): void}): Promise<T>},
	): Promise<T>;
};
export default d;
