export default {
	get() {
		return Math.floor(this.originLeft * this.rotatedInternalImageWidth);
	},

	set(value) {
		this.originLeft = value / this.rotatedInternalImageWidth;
	},
};
