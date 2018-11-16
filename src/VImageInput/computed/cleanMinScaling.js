export default function() {
	if (this.__rotatedInternalImageWidth && this.__rotatedInternalImageHeight) {
		switch (this.minScaling) {
			case 'cover':
				return Math.max(
					this.imageWidth / this.__rotatedInternalImageWidth,
					this.imageHeight / this.__rotatedInternalImageHeight,
				);
			case 'contain':
				return Math.min(
					this.imageWidth / this.__rotatedInternalImageWidth,
					this.imageHeight / this.__rotatedInternalImageHeight,
				);
		}
	}
	return 0;
}
