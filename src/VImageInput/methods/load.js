export default function(data) {
	if ((this.__imageData || data) && this.__imageData !== data) {
		let image = new Image();
		image.addEventListener('load', () => {
			let width = image.naturalWidth || image.width;
			let height = image.naturalHeight || image.height;
			if (width && height) {
				this.__internalImageData = data;
				this.__internalImageWidth = width;
				this.__internalImageHeight = height;
				this.__flippedHorizontally = false;
				this.__flippedVertically = false;
				this.__rotated = false;
				this.__scaling = 0;
				this.__center();
			} else {
				this.__internalImageData = null;
			}
		});
		image.src = data;
	}
}
