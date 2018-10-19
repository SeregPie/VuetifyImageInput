export default {
	get() {
		return (this.dirtyRotation % 4 + 4) % 4;
	},

	set(value) {
		this.dirtyRotation = value;
	},
};
