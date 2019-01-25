import Math_clamp from '../../utils/Math/clamp';

export default {
	get() {
		return Math.round(Math_clamp(
			this.scaledRotatedInternalImageHeightDifference * this.dirtyOriginTop,
			this.computedMinCroppingTop,
			this.computedMaxCroppingTop,
		));
	},

	set(value) {
		let {scaledRotatedInternalImageHeightDifference} = this;
		this.dirtyOriginTop = scaledRotatedInternalImageHeightDifference
			? value / scaledRotatedInternalImageHeightDifference
			: 1/2;
	},
};
