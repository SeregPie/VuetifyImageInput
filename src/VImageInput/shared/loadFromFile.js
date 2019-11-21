import Promise_try from '../../core/Promise/try';

import loadFromURL from './loadFromURL';

export default function(token, file) {
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
		return loadFromURL(token, dataURL);
	});
}
