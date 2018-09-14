export default {
	handler(value) {
		this.$emit('input', value);
	},
	immediate: true,
};
