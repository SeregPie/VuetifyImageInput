export default function() {
	return this.displayedImage ? this.displayedImage.cropAlign(this.imageWidth, this.imageHeight) : null;
}
