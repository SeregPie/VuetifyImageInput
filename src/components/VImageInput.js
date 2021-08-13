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
		let load = (() => { // should warn let

		});
		const v = (a // should warn unused
			.c()
			.d()
		);
		watch(
			() => props.modelValue,
			(value) => {
				emit('update:modelValue', value);
			},
			{immediate: true},
		);
		expose({
			load // should warn
		});
		return (() => h('div'));
	},
	data() { // should warn spaces
		return {lol: true};
	},
});
