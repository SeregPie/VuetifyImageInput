import {
	defineComponent,
	h,
	shallowRef,
	watch,
} from 'vue';

export default defineComponent({
	name: 'VImageInput',
	props: {
		modelValue: {
			type: String,
			default: null,
		},
	},
	setup(props, {emit}) {
		let chxpqwgbRef = shallowRef(props.modelValue);
		watch(
			chxpqwgbRef,
			(value) => {
				emit('update:modelValue', value);
			},
		);
		watch(
			() => props.modelValue,
			(value) => {
				chxpqwgbRef.value = value;
			},
		);
		return (() => h('div'));
	},
});
