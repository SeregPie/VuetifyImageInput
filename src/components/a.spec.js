import {
	defineComponent,
	h,
	shallowRef,
	watch,
	watchEffect,
	nextTick,
	computed,
	reactive,
} from 'vue';

import sleep from '../utils/sleep';

describe('', () => {
	let props = reactive({
		modelValue: null,
	});
	let imageDataURLRef = shallowRef(props.modelValue);
	watch(imageDataURLRef, value => {
		if (props.modelValue !== value) {
			console.log('update:modelValue', value);
			props.modelValue = value;
		}		
	});
	let originalImageRef = shallowRef(null);
	let originalImageDataURLRef = computed(() => {
		let image = originalImageRef.value;
		return image ? image.src : null;
	});
	let transformationRef = shallowRef(0);
	let reset = (() => {
		transformationRef.value = 0;
	});
	watch(originalImageDataURLRef, () => {
		console.log('RESET');
		reset();
	});
	watchEffect(async (onInvalidate) => {		
		let imageDataURL = originalImageDataURLRef.value;
		let transformation = transformationRef.value;
		console.log('TRANSFORMATION', imageDataURL, transformation);
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
	});
	watchEffect(async (onInvalidate) => {		
		let value = props.modelValue;
		let controller = new AbortController();
		onInvalidate(() => {
			controller.abort();
		});
		let {signal} = controller;
		await nextTick();
		if (signal.aborted) {
			return;
		}
		let imageDataURL = value;
		let image = imageDataURL ? {src: imageDataURL} : null;
		if (imageDataURLRef.value !== imageDataURL) {
			originalImageRef.value = image;
		}
	});
	let rotateClockwise = (() => {
		transformationRef.value++;
	});
	test('', async () => {
		await sleep(11);

		console.log('------');

		rotateClockwise();
		await sleep(11);

		console.log('------');

		props.modelValue = 'a';
		await sleep(11);

		console.log('------');

		rotateClockwise();
		await sleep(11);
		console.log('expect update:modelValue a1');

		console.log('------');

		rotateClockwise();
		await sleep(11);
		console.log('expect update:modelValue a2');

		console.log('------');

		props.modelValue = 'a';
		await sleep(11);

		console.log('------');

		props.modelValue = 'b';
		await sleep(11);

		console.log('------');

		rotateClockwise();
		rotateClockwise();
		await sleep(11);
		console.log('expect update:modelValue b2');

		console.log('------');

		props.modelValue = 'a';
		rotateClockwise();
		await sleep(11);
	});	
});

