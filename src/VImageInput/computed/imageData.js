import transformImage from './transformImage';

export default function() {
	if (this.internalImageData) {
		return transformImage(
			this.internalImageData,
			this.internalImageWidth,
			this.internalImageHeight,
			this.rotated,
			this.flippedHorizontally,
			this.flippedVertically,
			this.scaling,
			this.croppingLeft,
			this.croppingTop,
			this.imageBackgroundColor,
			this.imageWidth,
			this.imageHeight,
			this.imageFormat,
			this.imageQuality,
		);
	}
	return null;
}
