import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			Math.round(this.imageWidth / 2 - this.originLeft * this.scaledRotatedInternalImageWidth),
			this.minCroppingLeft,
			this.maxCroppingLeft,
		);
	},

	set(value) {
		this.originLeft = (this.imageWidth / 2 - value) / this.scaledRotatedInternalImageWidth;
	},
};
