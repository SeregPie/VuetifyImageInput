let {
	computed,
	defineComponent,
	h,
	shallowRef,
	watch,
	watchEffect,
	triggerRef,
} = Vue;

import loadImage from '../utils/loadImage';
import ImageTransformation from '../utils/ImageTransformation';
//import useDebounce from '../utils/useDebounce';

export default defineComponent({
	name: 'VImageInput',
	props: {
		imageFormat: {
			type: String,
			default: 'png',
		},
		imageQuality: {},
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

		let transformationRef = shallowRef(new DOMMatrix());
		let flipHorizontally = (() => {
			let m = transformationRef.value;
			transformationRef.value = m.flipX();
		});
		let flipVertically = (() => {
			let m = transformationRef.value;
			transformationRef.value = m.flipY();
		});

		let clear = (() => {
			internalImageRef.value = null;
		});

		let statusLoading = {};
		let statusSuccess = {};
		let statusError = {};
		let loadStatusRef = shallowRef(null);
		let loadingRef = computed(() => {
			let status = loadStatusRef.value;
			return status === statusLoading;
		});
		let loadSuccessRef = computed(() => {
			let status = loadStatusRef.value;
			return status === statusSuccess;
		});
		let loadErrorRef = computed(() => {
			let status = loadStatusRef.value;
			return status === statusError;
		});
		let loadController = null;
		let cancelLoad = (() => {
			if (loadController) {
				loadController.abort();
				loadController = null;
			}
		});
		let load = (async value => {
			cancelLoad();
			loadController = new AbortController();
			let {signal} = loadController;
			try {
				loadStatusRef.value = statusLoading;
				let image = await loadImage(value, signal);
				if (!signal.aborted) {
					loadStatusRef.value = statusSuccess;
					internalImageRef.value = image;
				}
			} catch {
				if (!signal.aborted) {
					loadStatusRef.value = statusError;
				}
			}
		});

		watch(
			() => props.modelValue,
			value => {
				if (value == null) {
					clear();
				} else {
					load(value);
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

		// debounce
		watch(
			() => {
				let image = internalImageRef.value;
				if (image) {
					let imageWidth = internalImageWidthRef.value;
					let imageHeight = internalImageHeightRef.value;
					let {
						imageFormat,
						imageQuality,
					} = props;
					let width = imageWidthRef.value;
					let height = imageHeightRef.value;
					let {a, b, c, d, e, f} = transformationRef.value;
					let canvas = document.createElement('canvas');
					let ctx = canvas.getContext('2d');
					canvas.width = width;
					canvas.height = height;
					ctx.translate(width/2, height/2);
					ctx.transform(a, b, c, d, e, f);
					ctx.drawImage(image, -imageWidth/2, -imageHeight/2);
					return canvas.toDataURL(`image/${imageFormat}`, imageQuality);
				}
				return null;
			},
			value => {
				imageDataURLRef.value = value;
			}
		);

		/*let viewEdit = {};
		let viewLoad = {};
		let viewRef = useDebounce(computed(() => {
			let image = internalImageRef.value;
			return image ? viewEdit : viewLoad;
		}), 1000);*/

		/*

		function drawImage(img, x, y, width, height, deg, flip, flop, center) {

		context.save();

		if(typeof width === "undefined") width = img.width;
		if(typeof height === "undefined") height = img.height;
		if(typeof center === "undefined") center = false;

		// Set rotation point to center of image, instead of top/left
		if(center) {
				x -= width/2;
				y -= height/2;
		}

		// Set the origin to the center of the image
		context.translate(x + width/2, y + height/2);

		// Rotate the canvas around the origin
		var rad = 2 * Math.PI - deg * Math.PI / 180;
		context.rotate(rad);

		// Flip/flop the canvas
		if(flip) flipScale = -1; else flipScale = 1;
		if(flop) flopScale = -1; else flopScale = 1;
		context.scale(flipScale, flopScale);

		// Draw the image
		context.drawImage(img, -width/2, -height/2, width, height);

		context.restore();
		}

*/

		let onClickToLoad = (event => {
			event.preventDefault();
			let input = document.createElement('input');
			input.setAttribute('type', 'file');
			input.addEventListener('change', event => {
				event.preventDefault();
				let {files} = event.target;
				if (files) {
					if (files.length) {
						let [file] = files;
						load(file);
					}
				}
			});
			input.click();
		});

		return (() => {
			let internalImageWidth = internalImageWidthRef.value;
			let internalImageHeight = internalImageHeightRef.value;
			let loading = loadingRef.value;
			let loadSuccess = loadSuccessRef.value;
			let loadError = loadErrorRef.value;
			let imageDataURL = imageDataURLRef.value;
			return h(
				'div',
				[
					h(
						'div',
						{
							style: {whiteSpace: 'pre-wrap'}
						},
						JSON.stringify({
							internalImageWidth,
							internalImageHeight,
							loading,
							loadSuccess,
							loadError,
						}, null, '\t'),
					),
					h(
						'div',
						{
							onClick: onClickToLoad,
						},
						'click me',
					),
					h(
						'div',
						{
							onClick: flipHorizontally,
						},
						'flip horizontally',
					),
					h(
						'div',
						{
							onClick: flipVertically,
						},
						'flip vertically',
					),
					...(imageDataURL
						? [h(
							'img',
							{
								src: imageDataURL,
								style: {background: 'green'},
							},
						)]
						: []
					),
				],
			);
		});
	},
});
