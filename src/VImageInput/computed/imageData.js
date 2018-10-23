import PaperDuck from 'paperduck';

export default function() {
	if (this.internalImageData) {
		let image = PaperDuck.from(this.internalImageData);
		if (this.flippedHorizontally) {
			image = image.flop();
		}
		if (this.flippedVertically) {
			image = image.flip();
		}
		if (this.rotated) {
			image = image.rotate90();
		}
		image = image.scale(this.scaling);
		image = image.crop(this.cropLeft, this.cropTop, this.imageWidth, this.imageHeight);
		return image.toDataURL(`image/${this.imageFormat}`, this.imageQuality);
	}
	return null;
}
