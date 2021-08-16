import {
	defineComponent,
	h,
	nextTick,
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
		/*let internalImageRef = shallowRef(null);
		let internalImageWidthRef = computed(() => {
			let image = internalImageRef.value;
			return image ? image.naturalWidth : 0;
		});
		let internalImageHeightRef = computed(() => {
			let image = internalImageRef.value;
			return image ? image.naturalHeight : 0;
		});
		let internalImageDataURLRef = computed(() => {
			let image = internalImageRef.value;
			return image ? image.src : null;
		});
		watch(
			internalImageDataURLRef,
			(value) => {
				emit('update:modelValue', value);
			},
		);*/
		watchEffect(async (onInvalidate) => {
			let value = props.modelValue;
			let controller = new AbortController();
			onInvalidate(() => {
				controller.abort();
			});
			let {signal} = controller;
			await nextTick();
			try {
				let amggjacm = await (async (value) => {
					if (value) {
						value = value.trim();
						if (value.startsWith('image')) {
							return value;
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
				if (!signal.aborted) {
					if (amggjacm !== value) {
						emit('update:modelValue', amggjacm);
					}
				}
			} catch (error) {
				if (!signal.aborted) {
					emit('error', error);
				}
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
