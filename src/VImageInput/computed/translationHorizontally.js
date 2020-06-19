import Math_clamp from '../../core/Math/clamp';

export default {
	get() {
		return Math_clamp(this.dirtyTranslationHorizontally, this.minTranslationHorizontally, this.maxTranslationHorizontally);
	},
	set(value) {
		this.dirtyTranslationHorizontally = value;
	},
};
