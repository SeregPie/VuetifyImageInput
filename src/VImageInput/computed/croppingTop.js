import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			Math.round(this.dirtyCroppingTop),
			this.minCroppingTop,
			this.maxCroppingTop,
		);
	},

	set(value) {
		this.dirtyCroppingTop = value;
	},
};
