import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(this.dirtyScaling, this.cleanMinScaling, this.cleanMaxScaling);
	},

	set(value) {
		this.dirtyScaling = value;
	},
};
