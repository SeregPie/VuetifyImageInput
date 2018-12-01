export default function() {
	if (this.rotatedInternalImageWidth && this.rotatedInternalImageHeight) {
		switch (this.minScaling) {
			case 'cover':
				return Math.max(
					this.imageWidth / this.rotatedInternalImageWidth,
					this.imageHeight / this.rotatedInternalImageHeight,
				);
			case 'contain':
				return Math.min(
					this.imageWidth / this.rotatedInternalImageWidth,
					this.imageHeight / this.rotatedInternalImageHeight,
				);
		}
	}
	return 0;
}
