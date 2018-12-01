import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			Math.round(this.dirtyCroppingLeft),
			this.minCroppingLeft,
			this.maxCroppingLeft,
		);
	},

	set(value) {
		this.dirtyCroppingLeft = value;
	},
};
