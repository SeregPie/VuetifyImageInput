import Function_noop from '../../core/Function/noop';
import Promise_try from '../../core/Promise/try';

export default function(file) {
	Promise_try(() => {
		this.cancel();
		let reader = new FileReader();
		let promise = new Promise((resolve, reject) => {
			reader.addEventListener('progress', event => {
				let {loaded} = event;
				this.progress = loaded;
				this.$emit('progress', {
					file,
					loaded,
				});
			});
			reader.addEventListener('load', () => {
				let {result} = reader;
				Object.assign(this, {
					loaded: true,
					result,
				});
				this.$emit('load', {
					file,
					result,
				});
				resolve();
			});
			reader.addEventListener('abort', () => {
				this.$emit('cancel', {file});
				resolve();
			});
			reader.addEventListener('error', reject);
		});
		let cancel = (() => {
			if (reader.readyState === 1) {
				reader.abort();
			}
		});
		reader.readAsDataURL(file);
		Object.assign(this, {
			cancel,
			error: null,
			failed: false,
			file,
			loaded: false,
			loading: true,
			progress: 0,
			result: null,
		});
		return promise;
	}).catch(error => {
		Object.assign(this, {
			error,
			failed: true,
		});
		this.$emit('error', {
			error,
			file,
		});
	}).finally(() => {
		Object.assign(this, {
			cancel: Function_noop,
			loading: false,
		});
	});
}
