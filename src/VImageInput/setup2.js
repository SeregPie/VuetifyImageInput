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

		translationHorizontally: computed(() => {
			return Math_clamp(translationHorizontally, state.minTranslationHorizontally, state.maxTranslationHorizontally);
		}),
		displayedTranslationHorizontally: (() => {
			let r = ref(zoom);
			let margin = 32;
			let damping = 3;
			return computed(() => {
				if (state.animated) {
					return state.normalizedTranslationHorizontally;
				}
				let {
					minTranslationHorizontally: min,
					maxTranslationHorizontally: max,
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
				flippedHorizontally ? -1 : 1,
				flippedVertically ? -1 : 1,
			].join(',')})`,
			`rotate(${displayedRotationInTurns}turn)`,
			`translate(${[
				`${displayedTranslationHorizontally}px`,
				`${displayedTranslationVertically}px`,
			].join(',')})`,
		].join(' ');
	});
	let reset = function() {
		let {
			imageHeight,
			imageWidth,
		} = props;
		rawImageWidth.value = imageWidth;
		rawImageHeight.value = imageHeight;
		rawTranslationHorizontally.value = translationHorizontally;
		rawTranslationVertically.value = translationVertically;
		rawRotationInTurns.value = rotationInTurns;
		flippedHorizontally.value = flippedHorizontally;
		flippedVertically.value = flippedVertically;
		rawZoom.value = zoom;
	};
	let cancel = Function_noop;
	let loadFromFile = function(file) {
		func(file, progress => {
			state.loadProgress = progress;
		})
			.then(image => {
				cancellation.throwIfCancelled();
				state.loadStatus = LoadSuccess;
				let timer = setTimeout(() => {
					state.loadStatus = null;
					state.internalImage = image;
				}, 1000);
				onCancel(() => {
					clearTimeout(timer);
				});
			})
			.catch(() => {
				state.loadStatus = LoadError;
				let timer = setTimeout(() => {
					state.loadStatus = null;
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
				flippedHorizontally,
				flippedVertically,
				imageBackgroundColor,
				imageFormat,
				imageHeight,
				imageQuality,
				imageWidth,
				internalImageHeight,
				internalImageWidth,
				rotationInRadians,
				translationHorizontally,
				translationVertically,
				zoom,
			} = state;
			let timer = setTimeout(() => {
				let canvas = document.createElement('canvas');
				canvas.width = imageWidth;
				canvas.height = imageHeight;
				let context = canvas.getContext('2d');
				if (imageBackgroundColor) {
					context.fillStyle = imageBackgroundColor;
					context.fillRect(0, 0, imageWidth, imageHeight);
				}
				context.translate(imageWidth/2, imageHeight/2);
				context.translate(translationHorizontally, translationVertically);
				context.rotate(rotationInRadians);
				context.scale(
					flippedHorizontally ? -1 : 1,
					flippedVertically ? -1 : 1,
				);
				context.scale(zoom, zoom);
				context.drawImage(internalImage, -internalImageWidth/2, -internalImageHeight/2);
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
		'imageWidth',
		'imageHeight',
	].forEach(key => {
		watch(() => state[key], value => {
			emit(`update:${key}`, value);
		});
	});
	let lock = function() {
		state.animated = false;
		state.displayedZoom = state.zoom;
		state.displayedTranslationHorizontally = state.translationHorizontally;
		state.displayedTranslationVertically = state.translationVertically;
		state.displayedRotationInTurns = state.rotationInTurns;
	};
	let unlock = function() {
		state.animated = true;
		state.zoom = state.displayedZoom;
		state.translationHorizontally = state.displayedTranslationHorizontally;
		state.translationVertically = state.displayedTranslationVertically;
		state.rotationInTurns = state.displayedRotationInTurns;
	};
	let onPanToTranslate = function(event) {
		let {
			displayedTranslationHorizontally: translationX,
			displayedTranslationVertically: translationY,
			displayedZoom: zoom,
			flippedHorizontally: flippedX,
			flippedVertically: flippedY,
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
			displayedTranslationHorizontally: translationX,
			displayedTranslationVertically: translationY,
		});
	};
	let resizeLeft = function(pixels) {
		state.imageWidth += pixels * 2;
	};
	let onPanToResizeLeft = function(event) {
		a = state.imageWidth - (event.x - event.previousX) * 2;
	};
	let onPanToResizeRight = function(event) {
		a = state.imageWidth + (event.x - event.previousX) * 2;
	};
	let onPanToResizeTop = function(event) {
		state.imageHeight -= (event.y - event.previousY) * 2;
	};
	let onPanToResizeBottom = function(event) {
		state.imageHeight += (event.y - event.previousY) * 2;
	};
*/

	let statusPending = {};
	let statusSuccess = {};
	let statusError = {};
	let loadStatusRef = ref(null);
	let loadProgressRef = ref(0);
	let load = (() => {
		// todo
	});
	let loadingRef = computed(() => {
		let status = loadStatusRef.value;
		return status === statusPending;
	});
	let loadSuccessRef = computed(() => {
		let status = loadStatusRef.value;
		return status === statusSuccess;
	});
	let loadErrorRef = computed(() => {
		let status = loadStatusRef.value;
		return status === statusError;
	});
	let internalImageRef = ref(null);
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
	let {imageWidth} = props;
	let rawImageWidthRef = ref(imageWidth);
	watch(() => props.imageWidth, value => {
		rawImageWidthRef.value = value;
	});
	let imageWidthRef = computed(() => {
		let min = props.imageMinWidth;
		let max = props.imageMaxWidth;
		let n = rawImageWidthRef.value;
		return Math_clamp(n, min, max);
	});
	watch(imageWidthRef, value => {
		emit('update:imageWidth', value);
	});
	let {imageHeight} = props;
	let rawImageHeightRef = ref(imageHeight);
	watch(() => props.imageHeight, value => {
		rawImageHeightRef.value = value;
	});
	let imageHeightRef = computed(() => {
		let min = props.imageMinHeight;
		let max = props.imageMaxHeight;
		let n = rawImageHeightRef.value;
		return Math_clamp(n, min, max);
	});
	watch(imageHeightRef, value => {
		emit('update:imageHeight', value);
	});
	let flippedHorizontally = false;
	let flippedHorizontallyRef = ref(flippedHorizontally);
	let flipHorizontally = (() => {
		flippedHorizontallyRef.value = !flippedHorizontallyRef.value;
	});
	let flippedVertically = false;
	let flippedVerticallyRef = ref(flippedVertically);
	let flipVertically = (() => {
		flippedVerticallyRef.value = !flippedVerticallyRef.value;
	});
	let rotationInTurns = 0;
	let rawRotationInTurnsRef = ref(rotationInTurns);
	let rotationInTurnsRef = computed(() => {
		let n = rawRotationInTurnsRef.value;
		n %= 1;
		if (n < 0) {
			n += 1;
		}
		return n;
	});
	let rotationInRadiansRef = computed(() => Math_turnsToRadians(rotationInTurnsRef.value));
	let rotate = (turns => {
		let flippedX = flippedHorizontallyRef.value;
		let flippedY = flippedVerticallyRef.value;
		if (flippedX !== flippedY) {
			turns *= -1;
		}
		rawRotationInTurnsRef.value += turns;
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
	let minTranslationHorizontallyRef = computed(() => {
		//todo
	});
	let maxTranslationHorizontallyRef = computed(() => {
		//todo
	});
	let translationHorizontally = 0;
	let rawTranslationHorizontallyRef = ref(translationHorizontally);
	let translationHorizontallyRef = computed(() => {
		let min = minTranslationHorizontallyRef.value;
		let max = maxTranslationHorizontallyRef.value;
		let n = rawTranslationHorizontallyRef.value;
		return Math_clamp(n, min, max);
	});
	let minTranslationVerticallyRef = computed(() => {
		//todo
	});
	let maxTranslationVerticallyRef = computed(() => {
		//todo
	});
	let translationVertically = 0;
	let rawTranslationVerticallyRef = ref(translationVertically);
	let translationVerticallyRef = computed(() => {
		let min = minTranslationVerticallyRef.value;
		let max = maxTranslationVerticallyRef.value;
		let n = rawTranslationVerticallyRef.value;
		return Math_clamp(n, min, max);
	});
	let minZoomRef = computed(() => {
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
	let setZoom = (() => {
		// todo
	});
	let zoomBy = (() => {
		// todo
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
			imageWidthRef,
			imageHeightRef,
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
	return {
		animated: animatedRef,
		clear,
		flipHorizontally,
		flipVertically,
		load,
		loadError: loadErrorRef,
		loading: loadingRef,
		loadProgress: loadProgressRef,
		loadSuccess: loadSuccessRef,
		maxZoom: maxZoomRef,
		minZoom: minZoomRef,
		onPanToResizeBottom,
		onPanToResizeLeft,
		onPanToResizeLeftBottom,
		onPanToResizeLeftTop,
		onPanToResizeRight,
		onPanToResizeRightBottom,
		onPanToResizeRightTop,
		onPanToResizeTop,
		onPanToTranslate,
		reset,
		rotate,
		rotateClockwise,
		rotateCounterClockwise,
		setZoom,
		showImageSize: showImageSizeRef,
		zoom: zoomRef,
		zoomIn,
		zoomOut,
		zoomSnap: zoomSnapRef,
	};
}
