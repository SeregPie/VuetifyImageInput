export default {
	get() {
		return this.lazyImage;
	},

	set(image) {
		this.lazyImage = image;
		this.$emit('input', this.internalValue);
	},
};
