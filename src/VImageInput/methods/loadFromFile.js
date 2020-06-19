import Function_noop from '../../core/Function/noop';

export default function(file) {
	let cancelled = false;
	let onCancel = Function_noop;
	this.cancelWith(() => {
		cancelled = true;
		onCancel();
		this.loading = false;
	});
	this.loadSuccess = false;
	this.loadError = false;
	this.loading = true;
	this.loadProgress = 0;
	let onError = (() => {
		if (!cancelled) {
			this.loadError = true;
			this.loading = false;
			this.resetCancellation();
		}
	});
	let timer = setTimeout(() => {
		let reader = new FileReader();
		reader.addEventListener('progress', event => {
			if (!cancelled) {
				if (event.lengthComputable) {
					this.loadProgress = event.loaded / event.total;
				}
			}
		});
		reader.addEventListener('load', () => {
			if (!cancelled) {
				let image = new Image();
				image.addEventListener('load', () => {
					if (!cancelled) {
						this.loadSuccess = true;
						this.loading = false;
						let timer = setTimeout(() => {
							this.internalImage = image;
							this.reset();
							this.resetCancellation();
						}, 1000);
						onCancel = (() => {
							clearTimeout(timer);
						});
					}
				});
				image.addEventListener('error', onError);
				onCancel = Function_noop;
				image.src = reader.result;
			}
		});
		reader.addEventListener('error', onError);
		onCancel = (() => {
			reader.abort();
		});
		reader.readAsDataURL(file);
	}, 1000);
	onCancel = (() => {
		clearTimeout(timer);
	});
}
