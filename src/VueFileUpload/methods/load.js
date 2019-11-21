import Function_noop from '../../core/Function/noop';
import Promise_try from '../../core/Promise/try';

export default function(token, file) {
	Promise_try(() => {
		let {
			$emit,
		} = this;
		let emit = $emit.bind(this);
		let cancelled = false;
		let reader = new FileReader();
		let promise = new Promise((resolve, reject) => {
			reader.addEventListener('progress', event => {
				let {loaded} = event;
				Object.assign(this, {
					progress: loaded,
				});
				emit('progress', {
					file,
					loaded,
				});
			});
			reader.addEventListener('load', () => {
				let {result} = reader;
				Object.assign(this, {
					loaded: true,
				});
				emit('load', {
					file,
					result,
				});
				resolve();
			});
			reader.addEventListener('abort', resolve);
			reader.addEventListener('error', reject);
		});
		cancel = (() => {
			cancelled = true;
			if (reader.readyState === 1) {
				reader.abort();
			}
			emit('cancel', {file});
		});
		reader.readAsDataURL(file);
		Object.assign(this, {
			cancel,
			failed: false,
			loaded: false,
			loading: true,
			progress: 0,
		});
		return promise;
	}).catch(error => {
		if (!cancelled) {
			Object.assign(this, {
				failed: true,
			});
			emit('error', {
				error,
				file,
			});
		}
	}).finally(() => {
		if (!cancelled) {
			Object.assign(this, {
				cancel: Function_noop,
				loading: false,
			});
		}
	});
}
