export default {
	get() {
		return this.frozenOriginalImage.value;
	},
	set(value) {
		this.frozenOriginalImage = Object.freeze({value});
	},
};
