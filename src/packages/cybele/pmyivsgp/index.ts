import mevgegna from '../mevgegna';

let {AbortController, Blob, URL, document} = globalThis;

export default async function pmyivsgp(
	src: unknown | string | Blob,
	{
		signal = new AbortController().signal,
	}: Partial<{
		signal: AbortSignal;
	}> = {},
): Promise<HTMLImageElement> {
	let fromString = async (src: string) => {
		let image = document.createElement('img');
		image.src = src;
		await image.decode();
		await new Promise((fn) => setTimeout(fn, 3000));
		return image;
	};
	let fromBlob = async (src: Blob) => {
		let url = URL.createObjectURL(src);
		try {
			return await fromString(url);
		} finally {
			URL.revokeObjectURL(url);
		}
	};
	return await mevgegna(signal, () => {
		if (src instanceof Blob) {
			return fromBlob(src);
		}
		return fromString(`${src}`);
	});
}
