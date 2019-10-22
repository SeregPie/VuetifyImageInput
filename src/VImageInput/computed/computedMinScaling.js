export default function() {
	switch (this.imageMinScaling) {
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
