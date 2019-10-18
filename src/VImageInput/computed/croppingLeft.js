import Math_clamp from '../../core/Math/clamp';

export default {
	get() {
		return Math.round(Math_clamp(
			this.scaledRotatedInternalImageWidthDifference * this.dirtyOriginLeft,
			this.computedMinCroppingLeft,
			this.computedMaxCroppingLeft,
		));
	},

	set(value) {
		let {scaledRotatedInternalImageWidthDifference} = this;
		this.dirtyOriginLeft = scaledRotatedInternalImageWidthDifference
			? value / scaledRotatedInternalImageWidthDifference
			: 1/2;
	},
};
