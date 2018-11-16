import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			Math.round(this.__dirtyCroppingLeft),
			this.__minCroppingLeft,
			this.__maxCroppingLeft,
		);
	},

	set(value) {
		this.__dirtyCroppingLeft = value;
	},
};
