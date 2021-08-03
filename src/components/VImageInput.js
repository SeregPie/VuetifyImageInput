import {
	defineComponent,
	h,
} from 'vue';

export default defineComponent({
	name: 'VImageInput',
	props: {
		modelValue: String,
	},
	setup(props, {
		emit,
		expose,
		slots,
	}) {
		let load = (() => {

		});
		expose({
			load,
		});
		return (() => {
			return h('div');
		});
	},
});
