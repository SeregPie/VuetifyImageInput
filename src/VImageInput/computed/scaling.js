import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(this.__dirtyScaling, this.__cleanMinScaling, this.__cleanMaxScaling);
	},

	set(value) {
		this.__dirtyScaling = value;
	},
};
