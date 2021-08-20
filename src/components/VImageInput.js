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
		let chooyxycImageDataURLRef = shallowRef(null);
		watch(
			chooyxycImageDataURLRef,
			(value) => {
				emit('update:modelValue', value);
			},
		);
		watchEffect(async (onInvalidate) => {
			let dataURL = hopxddhdImageDataURLRef.value;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await nextTick();
			await (new Promise(resolve => {
				setTimeout(resolve, 111);
			}));
			if (signal.aborted) {
				return;
			}
			if (dataURL == null) {
				chooyxycImageDataURLRef.value = null;
			} else {
				chooyxycImageDataURLRef.value = dataURL;
			}
		});
		watchEffect(async (onInvalidate) => {
			let value = props.modelValue;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await nextTick();
			await (new Promise(resolve => {
				setTimeout(resolve, 111);
			}));
			try {
				let image = await (async (value) => {
					if (value) {
						value = value.trim();
						if (value.startsWith('image')) {
							return {src: value};
						}
						if (value === 'data:,') {
							return null;
						}
						throw value;
						/*let image = await loadImage(value, signal);
						if (image.naturalWidth && image.naturalHeight) {
							return image.src;
						}*/
					}
					return null;
				})(value);
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
		let load = (() => {

		});
		expose({
			load,
		});
		return (() => h('div'));
	},
});
