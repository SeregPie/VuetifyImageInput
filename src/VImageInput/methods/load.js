import Function_noop from '../../core/Function/noop';
import Promise_try from '../../core/Promise/try';

export default function(file) {
	Promise_try(() => {
		let {cancel} = this;
		cancel();
		let cancelled = false;
		let throwIfCancelled = (() => {
			if (cancelled) {
				throw 0;
			}
		});
		let onCancelled = Function_noop;
		cancel = (() => {
			cancelled = true;
			onCancelled();
		});
		Object.assign(this, {
			cancel,
			failed: false,
			loaded: false,
			loading: true,
			progress: 0,
		});
		return Promise_try(() => {
			throwIfCancelled();
			let reader = new FileReader();
			let promise = new Promise((resolve, reject) => {
				reader.addEventListener('progress', event => {
					if (event.lengthComputable) {
						Object.assign(this, {
							progress: event.loaded / event.total,
						});
					}
				});
				reader.addEventListener('load', resolve);
				reader.addEventListener('abort', reject);
				reader.addEventListener('error', reject);
			});
			onCancelled = (() => {
				reader.abort();
			});
			reader.readAsDataURL(file);
			return promise.then(() => {
				throwIfCancelled();
				let image = new Image();
				let promise = new Promise((resolve, reject) => {
					image.addEventListener('load', resolve);
					image.addEventListener('error', reject);
				});
				onCancelled = Function_noop;
				image.src = reader.result;
				return promise.then(() => {
					throwIfCancelled();
					Object.assign(this, {
						loaded: true,
						originalImage: image,
						originalImageDataURL: image.src,
						originalImageHeight: image.naturalHeight,
						originalImageWidth: image.naturalWidth,
					});
				});
			});
		}).catch(() => {
			if (!cancelled) {
				Object.assign(this, {
					failed: true,
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
	});
}
