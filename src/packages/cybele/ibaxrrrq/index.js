let {document} = globalThis;

// prettier-ignore
export default (fn, {
  accept = '',
  multiple = false,
} = {}) => {
	let input = document.createElement('input');
	input.type = 'file';
	input.accept = accept;
	input.multiple = multiple;
	input.addEventListener('change', () => {
		fn(input.files);
	});
	input.click();
};
