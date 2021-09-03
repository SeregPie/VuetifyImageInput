export default defineComponent({
	name: 'VImageInput',
	props: {
		modelValue: {
			type: String,
			default: null,
		},
	},
	setup(props, {emit}) {
		let chxpqwgbRef = ref(pros.modelValue);
		let atgczxkfRef = computed(() => {
			let value = chxpqwgbRef.value;
			let settings = pros.settings;
			return value * settings;
		});
		watch(
			atgczxkfRef,
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
