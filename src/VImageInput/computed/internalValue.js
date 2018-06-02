export default {
	get() {
		return this.lazyValue;
	},

	set(value) {
		this.lazyValue = value;
		this.$emit('input', value);
	},
};
