import {
	defineComponent,
	watch,
	h,
} from 'vue';

export default defineComponent({
	name: 'VImageInput',
	props: {
		modelValue: {
			type: String,
			default: null,
		},
	},
	setup(props, {
		emit,
		expose,
	}) {
		const load = (() => {

		});
		watch(
			() => props.modelValue,
			(value) => {
				emit('update:modelValue', value);
			},
			{immediate: true},
		);
		expose({
			load,
		});
		return (() => h('div'));
	},
});
