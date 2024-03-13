let {AbortController, Blob, URL, document} = globalThis;

export default async (src, {signal = new AbortController().signal} = {}) => {
	let from;
	let fromString = async (src) => {
		let image = document.createElement('img');
		image.src = src;
		await image.decode();
		return image;
	};
	let fromBlob = async (src) => {
		let url = URL.createObjectURL(src);
		try {
			return await fromString(url);
		} finally {
			URL.revokeObjectURL(src);
		}
	};
	from = (src) => {
		if (src instanceof Blob) {
			return fromBlob(src);
		}
		return fromString(src);
	};
	return await mevgegna(signal, (onAbort) => from(src));
	{
		signal.throwIfAborted();
	}
	try {
		/*let promise = new Promise(async (resolve, reject) => {
			let onAbort = () => {
				reject(signal.reason);
			};
			signal.addEventListener('abort', onAbort);
			try {
				resolve(await from(src));
			} finally {
				signal.removeEventListener('abort', onAbort);
			}
		});
		*/
		return await from(src);
	} finally {
		signal.throwIfAborted();
	}
};
