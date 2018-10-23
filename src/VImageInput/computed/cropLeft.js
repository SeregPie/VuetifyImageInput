import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			Math.round(this.dirtyCropLeft),
			0,
			this.displayedImageWidth - this.imageWidth,
		);
	},

	set(value) {
		this.dirtyCropLeft = value;
	},
};
