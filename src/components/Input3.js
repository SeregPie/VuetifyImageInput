import {
	defineComponent,
	h,
	shallowRef,
	watch,
	watchEffect,
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
		let chxpqwgbRef = shallowRef(props.modelValue); // output
		watch(
			chxpqwgbRef,
			(value) => {
				emit('update:modelValue', value);
			},
		);
		let orwtlcwoRef = shallowRef(null);
		watchEffect(async (onInvalidate) => {
			let value = props.modelValue;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await sleep(3);
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
			await sleep(3);
			if (signal.aborted) {
				return;
			}
			if (orwtlcwo) {
				orwtlcwo += pzonrssw;
			}
			chxpqwgbRef.value = orwtlcwo;
		});
		let setValue = ((value) => {
			orwtlcwoRef.value = value;
		});
		let transformImage = ((value) => {
			pzonrsswRef.value = value;
		});
		expose({
			setValue,
			transformImage,
		});
		return (() => h('div'));
	},
});
