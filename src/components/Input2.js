import {
	computed,
	defineComponent,
	h,
	shallowRef,
	watch,
	watchEffect,
} from 'vue';

export default defineComponent({
	name: 'VImageInput',
	props: {
		max: {
			type: Number,
			default: 100,
		},
		min: {
			type: Number,
			default: 0,
		},
		modelValue: {
			type: Number,
			default: 0,
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
		let atgczxkfRef = computed(() => {
			let n = props.modelValue;
			let {
				max,
				min,
			} = props;
			return Math.min(Math.max(n, min), max);
		});
		watchEffect(() => {
			chxpqwgbRef.value = atgczxkfRef.value;
		});
		return (() => h('div'));
	},
});
