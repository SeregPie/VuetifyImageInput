export default function(data) {
	if ((this.imageData || data) && this.imageData !== data) {
		let image = new Image();
		image.addEventListener('load', () => {
			let width = image.naturalWidth || image.width;
			let height = image.naturalHeight || image.height;
			if (width && height) {
				this.internalImageData = data;
				this.internalImageWidth = width;
				this.internalImageHeight = height;
				this.flippedHorizontally = false;
				this.flippedVertically = false;
				this.rotated = false;
				this.scaling = 0;
				this.dirtyOriginLeft = 1/2;
				this.dirtyOriginTop = 1/2;
			} else {
				this.internalImageData = null;
			}
		});
		image.src = data;
	}
}
