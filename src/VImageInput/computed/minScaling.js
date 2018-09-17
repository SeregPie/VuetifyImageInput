export default function() {
	if (this.internalImage) {
		return Math.max(
			this.imageWidth / this.internalImage.width,
			this.imageHeight / this.internalImage.height,
		);
	}
	return 0;
}
