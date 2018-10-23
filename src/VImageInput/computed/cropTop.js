import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			Math.round(this.dirtyCropTop),
			0,
			this.displayedImageHeight - this.imageHeight,
		);
	},

	set(value) {
		this.dirtyCropTop = value;
	},
};
