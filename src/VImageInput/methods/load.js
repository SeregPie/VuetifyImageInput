import Function_noop from '../../core/Function/noop';
import Promise_try from '../../core/Promise/try';

import loadFromFile from '../shared/loadFromFile';

export default function(token, file) {
	Promise_try(() => {
		let {
			$emit,
		} = this;
		let emit = $emit.bind(this);
		Promise_try(() => {
			token.throwIfCancelled();
			let reader = new FileReader();
			let promise = new Promise((resolve, reject) => {
				reader.addEventListener('load', () => {
					let {result} = reader;
					resolve(result);
				});
				reader.addEventListener('abort', resolve);
				reader.addEventListener('error', reject);
			});
			token.onCancelled(() => {
				reader.abort();
			});
			reader.readAsDataURL(file);
			return promise;
		}).then(dataURL => {
			token.throwIfCancelled();
			let image = new Image();
			let promise = new Promise((resolve, reject) => {
				image.addEventListener('load', () => {
					resolve(image);
				});
				image.addEventListener('error', reject);
			});
			image.src = dataURL;
			return promise;
		}).then(image => {
			if (!cancelled) {
				Object.assign(this, {
					originalImage: image,
					originalImageHeight: image.naturalHeight,
					originalImageWidth: image.naturalWidth,
				});
			}
		});

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
		Object.assign(this, {
			failed: true,
		});
		emit('error', {
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
