import Promise_try from '../../core/Promise/try';

export default function(token, url) {
	Promise_try(() => {
		let image = new Image();
		let promise = new Promise((resolve, reject) => {
			image.addEventListener('load', () => {
				resolve(image);
			});
			image.addEventListener('error', reject);
		});
		image.src = url;
		return promise;
	});
}
