export default {
	handler(value) {
		if (this.imageData !== value) {
			this.setImageData(value);
		}
	},
	immediate: true,
};
