import Function_noop from '../core/Function/noop';

export default function() {
	this.cancellation();
	this.cancellation = Function_noop;
}
