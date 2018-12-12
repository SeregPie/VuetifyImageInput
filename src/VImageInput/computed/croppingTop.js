export default {
	get() {
		return this.scaledRotatedInternalImageHeightDifference * this.originTop;
	},

	set(value) {
		let {scaledRotatedInternalImageHeightDifference} = this;
		this.originTop = scaledRotatedInternalImageHeightDifference
			? value / scaledRotatedInternalImageHeightDifference
			: 1/2;
	},
};
