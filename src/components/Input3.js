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
		let pzonrsswRef = shallowRef('');
		watchEffect(async (onInvalidate) => {
			let orwtlcwo = orwtlcwoRef.value;
			let pzonrssw = pzonrsswRef.value;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await sleep(7);
			if (signal.aborted) {
				return;
			}
			if (orwtlcwo) {
				orwtlcwo += pzonrssw;
			}
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
		watch(
			() => props.modelValue,
			(value) => {
				chxpqwgbRef.value = value;
			},
		);
		watchEffect(async (onInvalidate) => {
			let value = props.modelValue;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await sleep(7);
			if (signal.aborted) {
				return;
			}

			try {
				let image = await loadImage(value, signal);
				if (signal.aborted) {
					return;
				}
				hopxddhdImageRef.value = image;
			} catch (error) {
				if (signal.aborted) {
					return;
				}
				emit('error', error);
			}
		});
		let setValue = ((value) => {
			chxpqwgbRef.value = value;
		});

		return (() => h('div'));
	},
});
