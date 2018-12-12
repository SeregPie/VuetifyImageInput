export default {
	get() {
		return this.imageWidth / 2 - this.originLeft * this.scaledRotatedInternalImageWidth;
	},

	set(value) {
		this.originLeft = (this.imageWidth / 2 - value) / this.scaledRotatedInternalImageWidth;
	},
};
