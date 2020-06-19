import Function_noop from '../core/Function/noop';

export default function() {
	let cancelled = false;
	let onCancel = Function_noop;
	this.cancelWith(() => {
		cancelled = true;
		onCancel();
	});
	//todo
}
