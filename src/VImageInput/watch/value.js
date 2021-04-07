export default {
	handler(value) {
		if (value) {
			this.load(value);
		} else {
			this.clear();
		}
	},
	immediate: true,
};
