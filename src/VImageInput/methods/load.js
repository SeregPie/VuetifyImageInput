import Function_noop from '../../core/Function/noop';
import Promise_delay from '../../core/Promise/delay';
import Promise_try from '../../core/Promise/try';

export default function(file) {
	Promise_try(() => {
		let {cancelLoad} = this;
		cancelLoad();
		let loadCancelled = false;
		let throwIfCancelled = (() => {
			if (loadCancelled) {
				throw 0;
			}
		});
		let onLoadCancelled = Function_noop;
		cancelLoad = (() => {
			loadCancelled = true;
			onLoadCancelled();
		});
		Object.assign(this, {
			cancelLoad,
			loadError: false,
			loadSuccess: false,
			loading: true,
			loadProgress: 0,
		});
		return Promise_delay(1000).then(() => {
			throwIfCancelled();
			let reader = new FileReader();
			let promise = new Promise((resolve, reject) => {
				reader.addEventListener('progress', event => {
					if (event.lengthComputable) {
						Object.assign(this, {
							loadProgress: event.loaded / event.total,
						});
					}
				});
				reader.addEventListener('load', resolve);
				reader.addEventListener('abort', reject);
				reader.addEventListener('error', reject);
			});
			onLoadCancelled = (() => {
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
				onLoadCancelled = Function_noop;
				image.src = reader.result;
				return Promise_delay(1000).then(() => promise).then(() => {
					throwIfCancelled();
					Object.assign(this, {
						loadSuccess: true,
					});
					return Promise_delay(5000).then(() => {
						throwIfCancelled();
						Object.assign(this, {
							originalImage: image,
						});
					});
				});
			});
		}).catch(() => {
			if (!loadCancelled) {
				Object.assign(this, {
					loadError: true,
				});
			}
		}).finally(() => {
			if (!loadCancelled) {
				Object.assign(this, {
					cancelLoad: Function_noop,
					loading: false,
				});
			}
		});
	});
}
