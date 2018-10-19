export default function() {
	if (this.rotatedInternalImageWidth && this.rotatedInternalImageHeight) {
		return Math.max(
			this.imageWidth / this.rotatedInternalImageWidth,
			this.imageHeight / this.rotatedInternalImageHeight,
		);
	}
	return 0;
}
