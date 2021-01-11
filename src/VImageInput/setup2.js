import {
	computed,
	ref,
	watch,
} from '@vue/composition-api';

import Math_clamp from '../core/Math/clamp';
import Math_turnsToRadians from '../../core/Math/turnsToRadians';

export default function(props, {emit}) {
	/*



	let onClickToLoad = function() {
		//todo
	};


	/*let state = reactive({

		translationX: computed(() => {
			return Math_clamp(translationX, state.minTranslationX, state.maxTranslationX);
		}),
		displayedTranslationX: (() => {
			let r = ref(zoom);
			let margin = 32;
			let damping = 3;
			return computed(() => {
				if (state.animated) {
					return state.normalizedTranslationX;
				}
				let {
					minTranslationX: min,
					maxTranslationX: max,
				} = state;
				let {value: n} = r;
				if (n < min) {
					n = Math.max(min + (min - n) / damping, min - margin);
				} else
				if (n > max) {
					n = Math.min(max + (n - max) / damping, max + margin);
				}
				return n;
			});
		})(),
	});


	let displayedImageTransformation = computed(() => {
		return [
			`scale(${displayedZoom})`,
			`scale(${[
				flippedX ? -1 : 1,
				flippedY ? -1 : 1,
			].join(',')})`,
			`rotate(${displayedRotation}turn)`,
			`translate(${[
				`${displayedTranslationX}px`,
				`${displayedTranslationY}px`,
			].join(',')})`,
		].join(' ');
	});
	let reset = function() {
		let {
			imageSizeY,
			imageSizeX,
		} = props;
		imageSizeXRaw.value = imageSizeX;
		rawImageSizeY.value = imageSizeY;
		rawTranslationX.value = translationX;
		rawTranslationY.value = translationY;
		rawRotation.value = rotation;
		flippedX.value = flippedX;
		flippedY.value = flippedY;
		rawZoom.value = zoom;
	};
	let cancel = Function_noop;
	let loadFromFile = function(file) {
		func(file, progress => {
			state.loadingProgress = progress;
		})
			.then(image => {
				cancellation.throwIfCancelled();
				state.loadingStatus = LoadSuccess;
				let timer = setTimeout(() => {
					state.loadingStatus = null;
					state.internalImage = image;
				}, 1000);
				onCancel(() => {
					clearTimeout(timer);
				});
			})
			.catch(() => {
				state.loadingStatus = LoadError;
				let timer = setTimeout(() => {
					state.loadingStatus = null;
				}, 1000);
				onCancel(() => {
					clearTimeout(timer);
				});
			})
	};
	let loadFromDataURL = function(dataURL) {
		func(dataURL)
			.then(image => {
				state.internalImage = image;
			})
			.catch(() => {
				state.internalImage = null;
			})
	};
	let clear = function() {
		cancel();
		state.internalImage = null;
		reset();
	};

	watch(() => props.value, imageDataURL => {
		if (imageDataURL) {
			if (imageDataURL !== state.imageDataURL) {
				loadFromDataURL(imageDataURL);
			}
		} else {
			clear();
		}
	});
	watch(() => state.imageDataURL, value => {
		emit('input', value);
	});
	watchEffect(() => {
		let {internalImage} = state;
		if (internalImage) {
			let {
				flippedX,
				flippedY,
				imageBackgroundColor,
				imageFormat,
				imageSizeY,
				imageQuality,
				imageSizeX,
				internalImageSizeY,
				internalImageSizeX,
				rotationInRadians,
				translationX,
				translationY,
				zoom,
			} = state;
			let timer = setTimeout(() => {
				let canvas = document.createElement('canvas');
				canvas.sizeX = imageSizeX;
				canvas.sizeY = imageSizeY;
				let context = canvas.getContext('2d');
				if (imageBackgroundColor) {
					context.fillStyle = imageBackgroundColor;
					context.fillRect(0, 0, imageSizeX, imageSizeY);
				}
				context.translate(imageSizeX/2, imageSizeY/2);
				context.translate(translationX, translationY);
				context.rotate(rotationInRadians);
				context.scale(
					flippedX ? -1 : 1,
					flippedY ? -1 : 1,
				);
				context.scale(zoom, zoom);
				context.drawImage(internalImage, -internalImageSizeX/2, -internalImageSizeY/2);
				let imageDataURL = canvas.toDataURL(`image/${imageFormat}`, imageQuality);
				resetCancellation();
				emit('input', imageDataURL);
			}, 1000);
			cancelWith(() => {
				clearTimeout(timer);
			});
		} else {
			cancel();
			emit('input', null);
		}
	});
	[
		'imageSizeX',
		'imageSizeY',
	].forEach(key => {
		watch(() => state[key], value => {
			emit(`update:${key}`, value);
		});
	});
	let lock = function() {
		state.animated = false;
		state.displayedZoom = state.zoom;
		state.displayedTranslationX = state.translationX;
		state.displayedTranslationY = state.translationY;
		state.displayedRotation = state.rotation;
	};
	let unlock = function() {
		state.animated = true;
		state.zoom = state.displayedZoom;
		state.translationX = state.displayedTranslationX;
		state.translationY = state.displayedTranslationY;
		state.rotation = state.displayedRotation;
	};
	let onPanToTranslate = function(event) {
		let {
			displayedTranslationX: translationX,
			displayedTranslationY: translationY,
			displayedZoom: zoom,
			flippedX: flippedX,
			flippedY: flippedY,
			rotationInRadians: a,
		} = state;
		let x = event.x - event.previousX;
		let y = event.y - event.previousY;
		if (flippedX) {
			x *= -1;
		}
		if (flippedY) {
			y *= -1;
		}
		x /= zoom;
		y /= zoom;
		let sinA = Math.sin(a);
		let cosA = Math.cos(a);
		translationX += x * cosA + y * sinA;
		translationY -= x * sinA - y * cosA;
		Object.assign(state, {
			displayedTranslationX: translationX,
			displayedTranslationY: translationY,
		});
	};
	let resizeLeft = function(pixels) {
		state.imageSizeX += pixels * 2;
	};
	let onPanToResizeLeft = function(event) {
		a = state.imageSizeX - (event.x - event.previousX) * 2;
	};
	let onPanToResizeRight = function(event) {
		a = state.imageSizeX + (event.x - event.previousX) * 2;
	};
	let onPanToResizeTop = function(event) {
		state.imageSizeY -= (event.y - event.previousY) * 2;
	};
	let onPanToResizeBottom = function(event) {
		state.imageSizeY += (event.y - event.previousY) * 2;
	};
*/

	let statusPending = {};
	let statusSuccess = {};
	let statusFailure = {};
	let loadingStatusRef = ref(null);
	let loadingProgressRef = ref(0);
	let load = (() => {
		// todo
	});
	let loadingPendingRef = computed(() => {
		let status = loadingStatusRef.value;
		return status === statusPending;
	});
	let loadingSuccessRef = computed(() => {
		let status = loadingStatusRef.value;
		return status === statusSuccess;
	});
	let loadingFailureRef = computed(() => {
		let status = loadingStatusRef.value;
		return status === statusFailure;
	});
	let internalImageRef = ref(null);
	let internalImageSizeXRef = computed(() => {
		let image = internalImageRef.value;
		return image ? image.naturalWidth : 0;
	});
	let internalImageSizeYRef = computed(() => {
		let image = internalImageRef.value;
		return image ? image.naturalHeight : 0;
	});
	let internalImageDataURLRef = computed(() => {
		let image = internalImageRef.value;
		return image ? image.src : null;
	});
	let {imageSizeX} = props;
	let imageSizeXRawRef = ref(imageSizeX);
	watch(() => props.imageSizeX, value => {
		imageSizeXRawRef.value = value;
	});
	let imageSizeXRef = computed(() => {
		let min = props.imageMinWidth;
		let max = props.imageMaxWidth;
		let n = imageSizeXRawRef.value;
		return Math_clamp(n, min, max);
	});
	watch(imageSizeXRef, value => {
		emit('update:imageSizeX', value);
	});
	let {imageSizeY} = props;
	let rawImageSizeYRef = ref(imageSizeY);
	watch(() => props.imageSizeY, value => {
		rawImageSizeYRef.value = value;
	});
	let imageSizeYRef = computed(() => {
		let min = props.imageSizeYMin;
		let max = props.imageSizeYMax;
		let n = rawImageSizeYRef.value;
		return Math_clamp(n, min, max);
	});
	watch(imageSizeYRef, value => {
		emit('update:imageSizeY', value);
	});
	let flippedX = false;
	let flippedXRef = ref(flippedX);
	let flipX = (() => {
		flippedXRef.value = !flippedXRef.value;
	});
	let flippedY = false;
	let flippedYRef = ref(flippedY);
	let flipY = (() => {
		flippedYRef.value = !flippedYRef.value;
	});
	let rotation = 0;
	let rawRotationRef = ref(rotation);
	let rotationRef = computed(() => {
		let n = rawRotationRef.value;
		n %= 1;
		if (n < 0) {
			n += 1;
		}
		return n;
	});
	let rotationInRadiansRef = computed(() => Math_turnsToRadians(rotationRef.value));
	let rotate = (n => {
		let flippedX = flippedXRef.value;
		let flippedY = flippedYRef.value;
		if (flippedX !== flippedY) {
			n *= -1;
		}
		rawRotationRef.value += n;
	});
	let rotationDelta = 1/4;
	let rotateClockwise = (() => {
		let delta = rotationDelta;
		rotate(+delta);
	});
	let rotateCounterClockwise = (() => {
		let delta = rotationDelta;
		rotate(-delta);
	});
	let minZoomRef = computed(() => {
		let a = rotationInRadiansRef.value;
		let x = imageSizeXRef.value;
		let y = imageSizeYRef.value;
		// todo
	});
	let maxZoomRef = computed(() => {
		let min = minZoomRef.value;
		let max = props.maxZoom;
		return Math.max(min, max);
	});
	let zoom = 0;
	let rawZoomRef = ref(zoom);
	let zoomRef = computed(() => {
		let min = minZoomRef.value;
		let max = maxZoomRef.value;
		let n = rawZoomRef.value;
		return Math_clamp(n, min, max);
	});
	let setZoom = (value => {
		rawZoomRef.value = value;
	});
	let zoomBy = (n => {
		let zoom = zoomRef.value;
		zoom *= n;
		rawZoomRef.value = zoom;
	});
	let zoomDeltaRef = computed(() => {
		let min = minZoomRef.value;
		let max = maxZoomRef.value;
		return (max - min) / 10;
	});
	let zoomIn = (() => {
		let delta = zoomDeltaRef.value;
		zoomBy(-delta);
	});
	let zoomOut = (() => {
		let delta = zoomDeltaRef.value;
		zoomBy(+delta);
	});
	let zoomSnapRef = computed(() => {
		let min = minZoomRef.value;
		let max = maxZoomRef.value;
		return (max - min) / 1000;
	});
	let minTranslationXRef = computed(() => {
		let a = zoomRef.value;
		let x = imageSizeXRef.value;
		let y = imageSizeYRef.value;
		//todo
	});
	let maxTranslationXRef = computed(() => {
		let a = zoomRef.value;
		let x = imageSizeXRef.value;
		let y = imageSizeYRef.value;
		//todo
	});
	let translationX = 0;
	let rawTranslationXRef = ref(translationX);
	let translationXRef = computed(() => {
		let min = minTranslationXRef.value;
		let max = maxTranslationXRef.value;
		let n = rawTranslationXRef.value;
		return Math_clamp(n, min, max);
	});
	let minTranslationYRef = computed(() => {
		let a = zoomRef.value;
		let x = imageSizeXRef.value;
		let y = imageSizeYRef.value;
		//todo
	});
	let maxTranslationYRef = computed(() => {
		let a = zoomRef.value;
		let x = imageSizeXRef.value;
		let y = imageSizeYRef.value;
		//todo
	});
	let translationY = 0;
	let rawTranslationYRef = ref(translationY);
	let translationYRef = computed(() => {
		let min = minTranslationYRef.value;
		let max = maxTranslationYRef.value;
		let n = rawTranslationYRef.value;
		return Math_clamp(n, min, max);
	});
	let translate = ((x, y) => {
		let flippedX = flippedXRef.value;
		let flippedY = flippedYRef.value;
		let rotation = rotationInRadiansRef.value;
		let translationX = translationXRef.value;
		let translationY = translationYRef.value;
		let zoom = zoomRef.value;
		if (flippedX) {
			x *= -1;
		}
		if (flippedY) {
			y *= -1;
		}
		x /= zoom;
		y /= zoom;
		let sinA = Math.sin(rotation);
		let cosA = Math.cos(rotation);
		translationX += x * cosA + y * sinA;
		translationY -= x * sinA - y * cosA;
		rawTranslationXRef.value = translationX;
		rawTranslationYRef.value = translationY;
	});
	let animatedRef = ref(true);
	let onInteractStart = (() => {
		animatedRef.value = false;
		// todo
	});
	let onInteractEnd = (() => {
		animatedRef.value = true;
		// todo
	});
	let showImageSizeRef = ref(false);
	{
		let timer;
		watch([
			imageSizeXRef,
			imageSizeYRef,
		], () => {
			showImageSizeRef.value = true;
			clearTimeout(timer);
			timer = setTimeout(() => {
				showImageSizeRef.value = false;
			}, 2000);
		});
	}
	let onPanToResizeLeft = ((event) => {
		// todo;
	});
	let onPanToResizeRight = ((event) => {
		// todo;
	});
	let onPanToResizeTop = ((event) => {
		// todo;
	});
	let onPanToResizeBottom = ((event) => {
		// todo;
	});
	let onPanToResizeLeftTop = ((event) => {
		onPanToResizeLeft(event);
		onPanToResizeTop(event);
	});
	let onPanToResizeLeftBottom = ((event) => {
		onPanToResizeLeft(event);
		onPanToResizeBottom(event);
	});
	let onPanToResizeRightTop = ((event) => {
		onPanToResizeRight(event);
		onPanToResizeTop(event);
	});
	let onPanToResizeRightBottom = ((event) => {
		onPanToResizeRight(event);
		onPanToResizeBottom(event);
	});
	let onPanToTranslate = ((event) => {
		// todo
	});

}
