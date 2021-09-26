import {
	computed,
	customRef,
	defineComponent,
	h,
	nextTick,
	shallowRef,
	watch,
	watchEffect,
} from 'vue';

import loadImage from '../utils/loadImage';

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
		let imageDataURLRef = shallowRef(props.modelValue);
		watch(imageDataURLRef, value => {
			if (props.modelValue !== value) {
				console.log('EMIT');
				emit('update:modelValue', value);
			}
		});
		let gkdarrqrImageRef = shallowRef(null);
		let gkdarrqrImageDataURLRef = computed(() => {
			let image = gkdarrqrImageRef.value;
			return image ? image.src : null;
		});
		watchEffect(async (onInvalidate) => {
			let value = props.modelValue;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await nextTick();
			let image = await loadImage(value);
			if (signal.aborted) {
				return;
			}
			console.log('SET gkdarrqrImage', image);
			gkdarrqrImageRef.value = image;
		});
		let originalImageRef = shallowRef(null);
		let originalImageDataURLRef = computed(() => {
			let image = originalImageRef.value;
			return image ? image.src : null;
		});
		watch(
			gkdarrqrImageDataURLRef,
			() => {
				console.log('SET originalImage', gkdarrqrImageRef.value);
				originalImageRef.value = gkdarrqrImageRef.value;
			},
		);
		let transformationRef = shallowRef(0);
		watchEffect(async (onInvalidate) => {
			let imageDataURL = originalImageDataURLRef.value;
			let transformation = transformationRef.value;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await nextTick();
			if (signal.aborted) {
				return;
			}
			if (imageDataURL && transformation) {
				imageDataURL += transformation;
			}
			imageDataURLRef.value = imageDataURL;
			console.log('SET imageDataURL', imageDataURL);
		});
		let rotateClockwise = (() => {
			transformationRef.value++;
		});
		expose({rotateClockwise});
		return (() => h('div'));
	},
});
