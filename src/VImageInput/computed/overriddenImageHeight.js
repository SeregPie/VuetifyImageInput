import Math_clamp from '../../core/Math/clamp';

export default {
	get() {
		return Math_clamp(this.dirtyImageHeight, this.imageMinHeight, this.imageMaxHeight);
	},
	set(value) {
		this.dirtyImageHeight = value;
	},
};
