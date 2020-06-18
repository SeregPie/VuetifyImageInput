import VImageInput from './VImageInput';

{
	let {window} = globalThis;
	if (window) {
		let {Vue} = window;
		if (Vue) {
			Vue.component(VImageInput.name, VImageInput);
		}
	}
}

export default VImageInput;
