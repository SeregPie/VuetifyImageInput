import Math_clamp from '../../core/Math/clamp';

export default {
	get() {
		return Math_clamp(this.dirtyImageWidth, this.imageMinWidth, this.imageMaxWidth);
	},
	set(value) {
		this.dirtyImageWidth = value;
	},
};
