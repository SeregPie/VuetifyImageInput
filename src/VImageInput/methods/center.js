export default function() {
	this.croppingLeft = (this.imageWidth - this.scaledRotatedInternalImageWidth) / 2;
	this.croppingTop = (this.imageHeight - this.scaledRotatedInternalImageHeight) / 2;
}
