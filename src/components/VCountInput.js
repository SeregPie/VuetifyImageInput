import {
	defineComponent,
	h,
	shallowRef,
	watch,
} from 'vue';

export default defineComponent({
	name: 'VCountInput',
	props: {
		modelValue: {
			type: Number,
			default: 0,
		},
	},
	setup(props, {
		emit,
		expose,
	}) {
		let countRef = shallowRef(props.modelValue);
		watch(
			() => props.modelValue,
			(value) => {
				countRef.value = value;
			},
		);
		watch(countRef, value => {
			if (props.modelValue !== value) {
				emit('update:modelValue', value);
			}
		});
		let increase = (() => {
			countRef.value++;
		});
		let decrease = (() => {
			countRef.value--;
		});
		expose({
			decrease,
			increase,
		});
		return (() => h('div'));
	},
});
