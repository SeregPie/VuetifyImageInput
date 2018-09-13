export default function() {
	if (!this.disabled) {
		this.$refs.input.value = null;
		this.$refs.input.click();
	}
}
