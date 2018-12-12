import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math.round(Math_clamp(
			this.imageHeight / 2 - this.originTop * this.scaledRotatedInternalImageHeight,
			this.minCroppingTop,
			this.maxCroppingTop,
		));
	},

	set(value) {
		this.originTop = (this.imageHeight / 2 - value) / this.scaledRotatedInternalImageHeight;
	},
};
