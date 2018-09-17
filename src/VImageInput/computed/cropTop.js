import Math_clamp from '/utils/Math/clamp';

export default {
	get() {
		return Math.floor(Math_clamp(
			(this.displayedImageHeight - this.imageHeight) / 2 - this.originTop * this.imageHeight,
			0,
			this.displayedImageHeight - this.imageHeight,
		));
	},

	set(value) {
		this.originTop = (this.displayedImageHeight / this.imageHeight - 1) / 2 - value / this.imageHeight;
	},
};
