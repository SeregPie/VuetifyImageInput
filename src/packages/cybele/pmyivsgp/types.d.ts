declare const d: {
	(
		src: unknown | string | Blob,
		options: Partial<{
			signal: AbortSignal;
		}>,
	): Promise<HTMLImageElement>;
};
export default d;
