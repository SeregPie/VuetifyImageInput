import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			Math.round(this.dirtyCropLeft),
			this.imageWidth - this.displayedImageWidth,
			0,
		);
	},

	set(value) {
		this.dirtyCropLeft = value;
	},
};
