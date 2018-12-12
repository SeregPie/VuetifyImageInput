export default {
	get() {
		return this.scaledRotatedInternalImageWidthDifference * this.originLeft;
	},

	set(value) {
		let {scaledRotatedInternalImageWidthDifference} = this;
		this.originLeft = scaledRotatedInternalImageWidthDifference
			? value / scaledRotatedInternalImageWidthDifference
			: 1/2;
	},
};
