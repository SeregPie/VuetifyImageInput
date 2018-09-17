import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math.floor(Math_clamp(
			(this.displayedImageWidth - this.imageWidth) / 2 - this.originLeft * this.imageWidth,
			0,
			this.displayedImageWidth - this.imageWidth,
		));
	},

	set(value) {
		this.originLeft = (this.displayedImageWidth / this.imageWidth - 1) / 2 - value / this.imageWidth;
	},
};
