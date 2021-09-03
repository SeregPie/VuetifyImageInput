import {
	defineComponent,
	h,
	shallowRef,
	watch,
	watchEffect,
	nextTick,
} from 'vue';

let sleep = (async (ms) => {
	await (new Promise(resolve => {
		setTimeout(resolve, ms);
	}));
});

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
		let chxpqwgbRef = shallowRef(props.modelValue); // output:transformedValue
		watch(
			chxpqwgbRef,
			(value) => {
				emit('update:modelValue', value);
			},
		);
		let orwtlcwoRef = shallowRef(null); // originalValue
		watchEffect(async (onInvalidate) => {
			let value = props.modelValue;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await nextTick();
			await sleep(4);
			if (signal.aborted) {
				return;
			}
			if (typeof value === 'string') {
				value = value.trim();
				if (!value) {
					value = null;
				}
			}
			orwtlcwoRef.value = value;
		});
		let pzonrsswRef = shallowRef(''); // transformation
		watchEffect(async (onInvalidate) => {
			let orwtlcwo = orwtlcwoRef.value;
			let pzonrssw = pzonrsswRef.value;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await nextTick();
			await sleep(4);
			if (signal.aborted) {
				return;
			}
			if (orwtlcwo) {
				orwtlcwo += pzonrssw;
			}
			chxpqwgbRef.value = orwtlcwo;
		});
		let transformImage = ((value) => {
			pzonrsswRef.value = value;
		});
		expose({transformImage});
		return (() => h('div'));
	},
});
