import PaperDuck from 'paperduck';

export default {
	handler(value) {
		if (this.internalValue !== value) {
			this.lazyImage = PaperDuck.from(value);
		}
	},
	immediate: true,
};
