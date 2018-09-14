export default {
	get() {
		return Math.floor(this.originTop * this.rotatedInternalImageHeight);
	},

	set(value) {
		this.originTop = value / this.rotatedInternalImageHeight;
	},
};
