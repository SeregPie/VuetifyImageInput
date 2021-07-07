export default defineComponent({
	name: 'VImageInput',
	props: {
		cancelIcon: {
			type: String,
			default: '$cancel',
		},
		clearable: {
			type: Boolean,
			default: false,
		},
		clearIcon: {
			type: String,
			default: '$clear',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		errorIcon: {
			type: String,
			default: '$error',
		},
		flipHorizontallyIcon: {
			type: String,
			default: 'mdi-flip-horizontal',
		},
		flipVerticallyIcon: {
			type: String,
			default: 'mdi-flip-vertical',
		},
		fullHeight: {
			type: Boolean,
			default: false,
		},
		fullWidth: {
			type: Boolean,
			default: false,
		},
		imageBackgroundColor: String,
		imageHeight: {
			type: Number,
			default: 256,
		},
		imageMaxHeight: {
			type: Number,
			default: 512,
		},
		imageMaxWidth: {
			type: Number,
			default: 512,
		},
		imageMinHeight: {
			type: Number,
			default: 128,
		},
		imageMinWidth: {
			type: Number,
			default: 128,
		},
		imageWidth: {
			type: Number,
			default: 256,
		},
		imageMaxScaling: {
			type: Number,
			default: 1,
		},
		imageMinScaling: {
			type: String,
			default: 'cover',
		},
		modelValue: String,
		readonly: {
			type: Boolean,
			default: false,
		},
		resetable: {
			type: Boolean,
			default: false,
		},
		resetIcon: {
			type: String,
			default: 'mdi-restore',
		},
		rotateClockwiseIcon: {
			type: String,
			default: 'mdi-rotate-right',
		},
		rotateCounterClockwiseIcon: {
			type: String,
			default: 'mdi-rotate-left',
		},
		successIcon: {
			type: String,
			default: '$success',
		},
		uploadIcon: {
			type: String,
			default: 'mdi-upload',
		},
		zoomInIcon: {
			type: String,
			default: 'mdi-magnify-plus-outline',
		},
		zoomOutIcon: {
			type: String,
			default: 'mdi-magnify-minus-outline',
		},
	},
	setup(props, {emit}) {
		let internalImageRef = shallowRef(null);
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

		let imageWidthRef = shallowRef(256);
		let imageHeightRef = shallowRef(256);
		let imageDataURLRef = shallowRef(null);

		let flippedHorizontallyRef = shallowRef(false);
		let flipHorizontally = (() => {
			flippedHorizontallyRef.value = !flippedHorizontallyRef.value;
		});
		let flippedVerticallyRef = shallowRef(false);
		let flipVertically = (() => {
			flippedVerticallyRef.value = !flippedVerticallyRef.value;
		});
		let rotationRef = shallowRef(0);
		let rotate = (n => {
			let m0 = flippedHorizontallyRef.value;
			let m1 = flippedVerticallyRef.value;
			if (m0 !== m1) {
				n *= -1;
			}
			rotationRef.value += n;
		});
		let rotationDelta = Math.PI/3;
		let rotateClockwise = (() => {
			let delta = rotationDelta;
			rotate(+delta);
		});
		let rotateCounterClockwise = (() => {
			let delta = rotationDelta;
			rotate(-delta);
		});
		let aaaaWidthRef = computed(() => {
			let x = internalImageWidthRef.value;
			let y = internalImageHeightRef.value;
			let a = rotationRef.value;
			return x * Math.abs(Math.cos(a)) + y * Math.abs(Math.sin(a));
		});
		let aaaaHeightRef = computed(() => {
			let x = internalImageWidthRef.value;
			let y = internalImageHeightRef.value;
			let a = rotationRef.value;
			return x * Math.abs(Math.sin(a)) + y * Math.abs(Math.cos(a));
		});
		let minZoomRef = computed(() => {
			switch (props.imageMinScaling) {
				case 'cover':
					return Math.max(
						props.imageWidth / aaaaWidthRef.value,
						props.imageHeight / aaaaHeightRef.value,
					);
				case 'contain':
					return Math.min(
						props.imageWidth / aaaaWidthRef.value,
						props.imageHeight / aaaaHeightRef.value,
					);
			}
			return 0;
		});
		let maxZoomRef = computed(() => {
			let min = minZoomRef.value;
			let max = props.imageMaxScaling;
			return Math.max(min, max);
		});
		let zoomRef = customRef((track, trigger) => {
			let n = 0;
			return {
				get() {
					track();
					let min = minZoomRef.value;
					let max = maxZoomRef.value;
					return clamp(n, min, max);
				},
				set(value) {
					n = value;
					trigger();
				},
			};
		});
		let setZoom = (value => {
			zoomRef.value = value;
		});
		let zoomBy = (n => {
			zoomRef.value += n;
		});
		let zoomDeltaRef = computed(() => {
			let min = minZoomRef.value;
			let max = maxZoomRef.value;
			return (max - min) / 10;
		});
		let zoomIn = (() => {
			let delta = zoomDeltaRef.value;
			zoomBy(+delta);
		});
		let zoomOut = (() => {
			let delta = zoomDeltaRef.value;
			zoomBy(-delta);
		});
		let zoomSnapRef = computed(() => {
			let min = minZoomRef.value;
			let max = maxZoomRef.value;
			return (max - min) / 1000;
		});
		let minTranslationHorizontallyRef = computed(() => {
			return -Infinity;
		});
		let maxTranslationHorizontallyRef = computed(() => {
			return +Infinity;
		});
		let translationHorizontallyRef = customRef((track, trigger) => {
			let n = 0;
			return {
				get() {
					track();
					let min = minTranslationHorizontallyRef.value;
					let max = maxTranslationHorizontallyRef.value;
					return clamp(n, min, max);
				},
				set(value) {
					n = value;
					trigger();
				},
			};
		});
		let minTranslationVerticallyRef = computed(() => {
			return -Infinity;
		});
		let maxTranslationVerticallyRef = computed(() => {
			return +Infinity;
		});
		let translationVerticallyRef = customRef((track, trigger) => {
			let n = 0;
			return {
				get() {
					track();
					let min = minTranslationVerticallyRef.value;
					let max = maxTranslationVerticallyRef.value;
					return clamp(n, min, max);
				},
				set(value) {
					n = value;
					trigger();
				},
			};
		});
		let translate = ((x, y) => {
			let fX = flippedHorizontallyRef.value;
			let fY = flippedVerticallyRef.value;
			let a = rotationRef.value;
			let s = zoomRef.value;
			if (fX) {
				x *= -1;
			}
			if (fY) {
				y *= -1;
			}
			x /= s;
			y /= s;
			let sinA = Math.sin(a);
			let cosA = Math.cos(a);
			translationHorizontallyRef.value += x * cosA + y * sinA;
			translationVerticallyRef.value -= x * sinA - y * cosA;
		});

		let clear = (() => {
			internalImageRef.value = null;
		});

		let {
			rotate,
			scale,
			flipX,
			flipY,
			translateX,
			translateY,
		} = use2DTransform();

		let {
			load,
			cancel,
			statusRef,
		} = useLoad(value => {
			internalImageRef.value = value;
		});


		return (() => {});
	},
});
