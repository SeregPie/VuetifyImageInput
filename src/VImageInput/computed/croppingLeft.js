import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			Math.round(this.dirtyCroppingLeft),
			this.imageWidth - this.displayedImageWidth,
			0,
		);
	},

	set(value) {
		this.dirtyCroppingLeft = value;
	},
};
