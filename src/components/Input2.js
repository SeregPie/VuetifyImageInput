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
	setup(props, {
		emit,
		expose,
	}) {
		let chxpqwgbRef = shallowRef(props.modelValue);
		watch(
			chxpqwgbRef,
			(value) => {
				emit('update:modelValue', value);
			},
		);
		let orwtlcwoRef = shallowRef(props.modelValue);
		watch(
			() => props.modelValue,
			(value) => {
				orwtlcwoRef.value = value;
			},
		);
		let atgczxkfRef = computed(() => {
			let n = orwtlcwoRef.value;
			let {
				max,
				min,
			} = props;
			return Math.min(Math.max(n, min), max);
		});
		watchEffect(() => {
			chxpqwgbRef.value = atgczxkfRef.value;
		});
		let setValue = ((value) => {
			orwtlcwoRef.value = value;
		});
		expose({setValue});
		return (() => h('div'));
	},
});
