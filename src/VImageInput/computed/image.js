export default function() {
	return this.displayedImage ? this.displayedImage.crop(this.cropLeft, this.cropTop, this.imageWidth, this.imageHeight) : null;
}
