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
		switch (this.rotation) {
			case 1:
				image = image.rotate90();
				break;
			case 2:
				image = image.rotate180();
				break;
			case 3:
				image = image.rotate270();
				break;
		}
		image = image.scale(this.scaling);
		image = image.cropAlign(this.imageWidth, this.imageHeight);
		return image.toDataURL(`image/${this.imageFormat}`, this.imageQuality);
	}
	return null;
}
