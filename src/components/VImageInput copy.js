export default defineComponent({
	name: 'VImageInput',
	props: {

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

		let transformation = [
			sizeX,
			sizeY,
			flipX,
			flipY,
			rotate,
			scale,
			translateX,
			translateY,
		];

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
			let kspdpvqpujod = flippedHorizontallyRef.value;
			let jyqoqgouuesy = flippedVerticallyRef.value;
			if (kspdpvqpujod !== jyqoqgouuesy) {
				n *= -1;
			}
			rotationRef.value += n;
		});
		let rotationDelta = Math.PI/3;// Math.PI/2
		let rotateClockwise = (() => {
			let delta = rotationDelta;
			rotate(+delta);
		});
		let rotateCounterClockwise = (() => {
			let delta = rotationDelta;
			rotate(-delta);
		});

		let minZoomRef = computed(() => {
			// todo
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
		let zoom = (n => {
			zoomRef.value += n;
		});
		let zoomDeltaRef = computed(() => {
			let min = minZoomRef.value;
			let max = maxZoomRef.value;
			return (max - min) / 10;
		});
		let zoomIn = (() => {
			let delta = zoomDeltaRef.value;
			zoom(+delta);
		});
		let zoomOut = (() => {
			let delta = zoomDeltaRef.value;
			zoom(-delta);
		});
		let zoomSnapRef = computed(() => {
			let min = minZoomRef.value;
			let max = maxZoomRef.value;
			return (max - min) / 1000;
		});
		let minLeftRef = computed(() => {
			// todo
		});
		let maxLeftRef = computed(() => {
			// todo
		});
		let minTopRef = computed(() => {
			// todo
		});
		let maxTopRef = computed(() => {
		// todo
		});
		let leftRef = customRef((track, trigger) => {
			let n = 0;
			return {
				get() {
					track();
					let min = minLeftRef.value;
					let max = maxLeftRef.value;
					return clamp(n, min, max);
				},
				set(value) {
					n = value;
					trigger();
				},
			};
		});
		let topRef = customRef((track, trigger) => {
			let n = 0;
			return {
				get() {
					track();
					let min = minTopRef.value;
					let max = maxTopRef.value;
					return clamp(n, min, max);
				},
				set(value) {
					n = value;
					trigger();
				},
			};
		});
		let move = ((x, y) => {
			let kspdpvqpujod = flippedHorizontallyRef.value;
			let jyqoqgouuesy = flippedVerticallyRef.value;
			let uucqybjgheay = rotationRef.value;
			let daquxyaljjca = zoomRef.value;
			if (kspdpvqpujod) {
				x *= -1;
			}
			if (jyqoqgouuesy) {
				y *= -1;
			}
			x /= daquxyaljjca;
			y /= daquxyaljjca;
			let sinA = Math.sin(uucqybjgheay);
			let cosA = Math.cos(uucqybjgheay);
			leftRef.value += x * cosA + y * sinA;
			topRef.value -= x * sinA - y * cosA;
		});

		let clear = (() => {
			// todo
			internalImageRef.value = null;
		});

		let StatusLoading = {};
		let StatusSuccess = {};
		let StatusError = {};
		let loadStatusRef = shallowRef(null);
		let loadingRef = computed(() => {
			let status = loadStatusRef.value;
			return status === StatusLoading;
		});
		let loadSuccessRef = computed(() => {
			let status = loadStatusRef.value;
			return status === StatusSuccess;
		});
		let loadErrorRef = computed(() => {
			let status = loadStatusRef.value;
			return status === StatusError;
		});
		let loadController = null;
		let cancelLoad = (() => {
			if (loadController) {
				loadController.abort();
				loadController = null;
			}
		});
		let load = (async value => {
			// todo
			cancelLoad();
			loadController = new AbortController();
			let {signal} = loadController;
			try {
				loadStatusRef.value = StatusLoading;
				let image = await loadImage(value, signal);
				if (!signal.aborted) {
					loadStatusRef.value = StatusSuccess;
					internalImageRef.value = image;
				}
			} catch {
				if (!signal.aborted) {
					loadStatusRef.value = StatusError;
				}
			}
		});
		watch(
			() => props.modelValue,
			value => {
				// todo
				if (value) {
					let currentValue = imageDataURLRef.value;
					if (currentValue !== value) {
						load(value);
					}
				} else {
					clear();
				}
			},
			{immediate: true},
		);
		watch(
			imageDataURLRef,
			value => {
				emit('update:modelValue', value);
			},
		);


		let xRef;
		let yRef;
		let currentTransformation = computed(() => {
			t = t.translate(x, y);
			t.translationX = dumping(t.translationX, min, max, 10);
		})
		let onDrag = ((x, y) => {
			xRef.value = x;
			yRef.value = y;
		});

		return (() => {});
	},
});
