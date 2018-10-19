import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			this.dirtyCropTop,
			0,
			this.displayedInternalImageHeight - this.imageHeight,
		);
	},

	set(value) {
		this.dirtyCropTop = value;
	},
};
