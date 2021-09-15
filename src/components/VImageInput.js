import {
	defineComponent,
	h,
	shallowRef,
	watch,
	watchEffect,
	nextTick,
	computed,
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
		let externalImageDataURLRef = shallowRef(props.modelValue);
		watch(
			externalImageDataURLRef,
			(value) => {
				emit('update:modelValue', value);
			},
		);
		let internalImageRef = shallowRef(null);
		let internalImageDataURLRef = computed(() => {
			let image = internalImageRef.value;
			return image ? image.src : null;
		});
		let transformationRef = shallowRef(0); //
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
			externalImageDataURLRef.value = image ? image.src : null;
		});
		let rotateClockwise = (() => {
			transformationRef.value++;
		});
		expose({rotateClockwise});
		return (() => h('div'));
	},
});
