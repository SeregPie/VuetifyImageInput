import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math_clamp(this.dirtyScaling, this.minScaling, this.maxScaling);
	},

	set(value) {
		this.dirtyScaling = value;
	},
};
