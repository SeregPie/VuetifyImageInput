let {document} = globalThis;

// prettier-ignore
export let ibaxrrrq = (fn, {
	accept,
}) => {
	let input = document.createElement('input');
	input.type = 'file';
	input.accept = accept;
	input.addEventListener('change', () => {
		fn(input.files);
	});
	input.click();
};
