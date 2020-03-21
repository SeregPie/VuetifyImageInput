export default function() {
	switch (this.minZoom) {
		case 'cover':
			return Math.max(
				this.relativeRotatedInternalImageWidth,
				this.relativeRotatedInternalImageHeight,
			);
		case 'contain':
			return Math.min(
				this.relativeRotatedInternalImageWidth,
				this.relativeRotatedInternalImageHeight,
			);
	}
	return 0;
}
