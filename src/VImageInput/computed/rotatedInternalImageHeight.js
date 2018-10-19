export default function() {
	return (this.rotation % 2) ? this.internalImageWidth : this.internalImageHeight;
}
