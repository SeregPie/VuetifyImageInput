import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(
			this.scaling,
			this.computedMinScaling,
			this.computedMaxScaling,
		);
	},

	set(value) {
		this.scaling = value;
	},
};
