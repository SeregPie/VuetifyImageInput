export default {
	get() {
		return this.imageHeight / 2 - this.originTop * this.scaledRotatedInternalImageHeight;
	},

	set(value) {
		this.originTop = (this.imageHeight / 2 - value) / this.scaledRotatedInternalImageHeight;
	},
};
