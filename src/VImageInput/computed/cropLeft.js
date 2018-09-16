import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			Math.floor(this.originLeft * this.rotatedInternalImageWidth),
			0,
			this.scaledRotatedInternalImageWidth - this.imageWidth,
		);
	},

	set(value) {
		this.originLeft = value / this.rotatedInternalImageWidth;
	},
};
