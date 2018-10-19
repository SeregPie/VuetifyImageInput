import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			this.dirtyCropLeft,
			0,
			this.displayedInternalImageWidth - this.imageWidth,
		);
	},

	set(value) {
		this.dirtyCropLeft = value;
	},
};
