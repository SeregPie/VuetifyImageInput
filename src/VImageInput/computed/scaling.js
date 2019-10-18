import Math_clamp from '../../core/Math/clamp';

export default {
	get() {
		return Math_clamp(
			this.dirtyScaling,
			this.computedMinScaling,
			this.computedMaxScaling,
		);
	},

	set(value) {
		this.dirtyScaling = value;
	},
};
