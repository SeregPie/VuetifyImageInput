import Math_clamp from '../../core/Math/clamp';

export default {
	get() {
		return Math_clamp(this.dirtyTranslationVertically, this.minTranslationVertically, this.maxTranslationVertically);
	},
	set(value) {
		this.dirtyTranslationVertically = value;
	},
};
