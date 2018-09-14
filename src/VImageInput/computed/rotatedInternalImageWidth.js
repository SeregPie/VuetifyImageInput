export default function() {
	return (this.rotation % 2) ? this.internalImageHeight : this.internalImageWidth;
}
