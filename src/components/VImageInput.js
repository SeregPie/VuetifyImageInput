import {
	defineComponent,
	h,
	nextTick,
	watch,
	watchEffect,
	shallowRef,
	computed,
} from 'vue';

import loadImage from '../utils/loadImage';
import transformImage from '../utils/transformImage';
import sleep from '../utils/sleep';

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
		let hopxddhdImageRef = shallowRef(null);
		let hopxddhdImageWidthRef = computed(() => {
			let image = hopxddhdImageRef.value;
			return image ? image.naturalWidth : 0;
		});
		let hopxddhdImageHeightRef = computed(() => {
			let image = hopxddhdImageRef.value;
			return image ? image.naturalHeight : 0;
		});
		let hopxddhdImageDataURLRef = computed(() => {
			let image = hopxddhdImageRef.value;
			return image ? image.src : null;
		});
		let chooyxycImageRef = shallowRef(null);
		let chooyxycImageDataURLRef = computed(() => {
			let image = chooyxycImageRef.value;
			return image ? image.src : null;
		});

		let load = ((file) => {
			// set status loading

			try {
				// set status success
				// wait 1s
				// unset status
			} catch (error) {
				// set status error
				// wait 1s
				// unset status
			}
		});
		expose({
			load,
		});
		watchEffect(async (onInvalidate) => {
			let value = props.modelValue;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await nextTick();
			await sleep(111);
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
		watchEffect(async (onInvalidate) => {
			let image = hopxddhdImageRef.value;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await nextTick();
			await sleep(111);
			if (signal.aborted) {
				return;
			}
			if (image) {
				image = await transformImage(image, null);
				if (signal.aborted) {
					return;
				}
			}
			chooyxycImageRef.value = image;
		});
		watch(
			chooyxycImageDataURLRef,
			(value) => {
				emit('update:modelValue', value);
			},
		);
		return (() => h('div'));
	},
});
