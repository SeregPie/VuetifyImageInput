import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			Math.round(this.dirtyCropTop),
			this.imageHeight - this.displayedImageHeight,
			0,
		);
	},

	set(value) {
		this.dirtyCropTop = value;
	},
};
