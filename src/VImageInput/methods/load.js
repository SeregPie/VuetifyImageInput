export default function({ file, base64: data }) {
	if ((this.imageData || data) && this.imageData !== data) {
		let image = new Image();
		image.addEventListener('load', (e) => {
			let width = image.naturalWidth;
			let height = image.naturalHeight;
			this.internalImageData = (width && height) ? data : null;
			this.internalImageWidth = width;
			this.internalImageHeight = height;
			this.flippedHorizontally = false;
			this.flippedVertically = false;
			this.rotated = false;
			this.scaling = 0;
			this.dirtyOriginLeft = 1/2;
			this.dirtyOriginTop = 1/2;
		});

		if (file) {
			this.$emit('file-info', {
				name: file.name || '',
				size: file.size || '',
				type: file.type || '',
				lastModified: file.lastModified || ''
			})
		}
		image.src = data;
	}
}
