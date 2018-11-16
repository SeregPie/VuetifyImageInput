import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			Math.round(this.__dirtyCroppingTop),
			this.__minCroppingTop,
			this.__maxCroppingTop,
		);
	},

	set(value) {
		this.__dirtyCroppingTop = value;
	},
};
