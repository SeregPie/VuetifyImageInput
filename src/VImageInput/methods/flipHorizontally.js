export default function() {
	if (this.internalImage) {
		this.internalImage = this.internalImage.flop();
	}
}
