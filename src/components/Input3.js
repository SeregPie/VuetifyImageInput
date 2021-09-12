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
		let cancel = (() => {});
		let chxpqwgbRef = shallowRef(props.modelValue); // output:transformedValue
		watch(
			chxpqwgbRef,
			(value, oldValue) => {
				console.log(value, oldValue);
				emit('update:modelValue', value);
			},
		);
		let efzfyfkmmwoh = (async (value) => {
			await sleep(1);
			if (typeof value === 'string') {
				value = value.trim();
				if (!value) {
					value = null;
				}
			}
			return value;
		});
		let orwtlcwoRef = shallowRef(null); // originalValue
		let pzonrsswRef = shallowRef(0); // transformation
		watchEffect(async (onInvalidate) => {
			let value = props.modelValue;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await nextTick();
			value = await efzfyfkmmwoh(value);
			if (signal.aborted) {
				return;
			}
			console.log('LOADED', value, chxpqwgbRef.value);
			if (chxpqwgbRef.value !== value) {
				orwtlcwoRef.value = value;
				pzonrsswRef.value = 0;
			}
		});
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
			if (orwtlcwo && pzonrssw) {
				orwtlcwo += pzonrssw;
			}
			chxpqwgbRef.value = orwtlcwo;
		});
		let rotateClockwise = (() => {
			pzonrsswRef.value++;
		});
		expose({rotateClockwise});
		return (() => h('div'));
	},
});
