export default function(dataURL) {
	let cancelled = false;
	this.cancelWith(() => {
		cancelled = true;
	});
	let image = new Image();
	image.addEventListener('load', () => {
		if (!cancelled) {
			this.internalImage = image;
			this.reset();
			this.resetCancellation();
		}
	});
	image.addEventListener('error', () => {
		if (!cancelled) {
			this.internalImage = null;
			this.reset();
			this.resetCancellation();
		}
	});
	image.src = dataURL;
}
