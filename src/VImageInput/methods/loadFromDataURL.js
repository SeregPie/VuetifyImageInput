import Function_noop from '../core/Function/noop';

export default function() {
	this.cancel();
	let cancelled = false;
	let onCancel = Function_noop;
	this.cancellation = (() => {
		cancelled = true;
		onCancel();
	});
	//todo
}
