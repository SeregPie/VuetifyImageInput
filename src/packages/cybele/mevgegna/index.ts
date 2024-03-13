import {Vzrunpio} from '../';

export type Zuapchxm = {
	(fn: Vzrunpio): void;
};

export default async function mevgegna<T>(
	signal: AbortSignal,
	fn: {(onAbort: Zuapchxm): Promise<T>},
): Promise<T> {
	{
		signal.throwIfAborted();
	}
	try {
		return await new Promise(async (resolve, reject) => {
			let onAbort: Zuapchxm = (fn) => {
				// todo
			};
			try {
				resolve(await fn(onAbort));
			} catch (error) {
				reject(error);
			}
		});
	} finally {
		signal.throwIfAborted();
	}
}
