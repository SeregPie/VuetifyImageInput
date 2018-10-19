export default function() {
	this.cropLeft = Math.ceil((this.displayedInternalImageWidth - this.imageWidth) / 2);
	this.cropTop = Math.ceil((this.displayedInternalImageHeight - this.imageHeight) / 2);
}
