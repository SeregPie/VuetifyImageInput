import Function_noop from '../../Function/noop';
import Promise_delay from '../../Promise/delay';
import Promise_try from '../../Promise/try';

export default function(that, delay, immediate) {
	let queue = Promise.resolve();
	let currentThis;
	let currentArgs;
	let currentPromise;
	let resolveCurrentPromise;
	let aaa = (() => {
		queue = queue.then(() => {
			try {
				let promise = that.apply(currentThis, currentArgs);
				resolveCurrentPromise(promise);
				return promise;
			} finally {
				currentPromise = null;
			}
		}).catch(Function_noop);
	});
	let bbb = (() => {
		queue = queue.then(() => Promise_delay(delay));
	});
	return function(...args) {
		return Promise_try(() => {
			currentThis = this;
			currentArgs = args;
			if (!currentPromise) {
				currentPromise = new Promise(resolve => {
					resolveCurrentPromise = resolve;
				});
				if (immediate) {
					aaa();
					bbb();
				} else {
					bbb();
					aaa();
				}
			}
			return currentPromise;
		});
	};
}
