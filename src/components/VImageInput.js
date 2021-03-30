let {
	computed,
	defineComponent,
	h,
	shallowRef,
	watch,
	watchEffect,
	triggerRef,
	resolveComponent,
} = Vue;

import loadImage from '../utils/loadImage';
import clamp from '../utils/clamp';
import ImageTransformation from '../utils/ImageTransformation';
//import useDebounce from '../utils/useDebounce';

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
		flippable: {
			type: Boolean,
			default: false,
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
		maxZoom: {
			type: Number,
			default: 1,
		},
		minZoom: {
			type: String,
			default: 'cover',
		},
		modelValue: String,
		resetable: {
			type: Boolean,
			default: false,
		},
		resetIcon: {
			type: String,
			default: 'mdi-restore',
		},
		resizable: {
			type: Boolean,
			default: false,
		},
		rotatable: {
			type: Boolean,
			default: false,
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
		translatable: {
			type: Boolean,
			default: false,
		},
		uploadIcon: {
			type: String,
			default: 'mdi-upload',
		},
		zoomable: {
			type: Boolean,
			default: false,
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
			let flippedHorizontally = flippedHorizontallyRef.value;
			let flippedVertically = flippedVerticallyRef.value;
			if (flippedHorizontally !== flippedVertically) {
				n *= -1;
			}
			rotationRef.value += n;
		});
		let rotationDelta = Math.PI/2;
		let rotateClockwise = (() => {
			let delta = rotationDelta;
			rotate(+delta);
		});
		let rotateCounterClockwise = (() => {
			let delta = rotationDelta;
			rotate(-delta);
		});
		let minZoomRef = computed(() => {
			return 1/10;
		});
		let maxZoomRef = computed(() => {
			let min = minZoomRef.value;
			let max = props.maxZoom;
			return Math.max(min, max);
		});
		let rawZoomRef = shallowRef(0);
		let zoomRef = computed({
			get() {
				let min = minZoomRef.value;
				let max = maxZoomRef.value;
				let n = rawZoomRef.value;
				return clamp(n, min, max);
			},
			set(value) {
				rawZoomRef.value = value;
			},
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

		/*watch(
			() => props.modelValue,
			value => {
				if (value == null) {
					clear();
				} else {
					load(value);
				}
			},
			{immediate: true},
		);*/
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
					let flippedHorizontally = flippedHorizontallyRef.value;
					let flippedVertically = flippedVerticallyRef.value;
					let rotation = rotationRef.value;
					let zoom = zoomRef.value;
					let canvas = document.createElement('canvas');
					let ctx = canvas.getContext('2d');
					canvas.width = width;
					canvas.height = height;
					ctx.translate(width/2, height/2);
					ctx.scale(zoom, zoom);
					ctx.scale(
						flippedHorizontally ? -1 : 1,
						flippedVertically ? -1 : 1,
					);
					ctx.rotate(rotation);
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
			let VBtn = resolveComponent('VBtn');
			let genActionButton = ((
				icon,
				onClick,
			) => {
				return h(
					VBtn,
					{
						icon,
						onClick,
					},
				);
			});
			let genActionButtonFlipHorizontally = (() => {
				return genActionButton(
					props.flipHorizontallyIcon,
					flipHorizontally,
				);
			});
			let genActionButtonFlipVertically = (() => {
				return genActionButton(
					props.flipVerticallyIcon,
					flipVertically,
				);
			});
			let genActionButtonRotateClockwise = (() => {
				return genActionButton(
					props.rotateClockwiseIcon,
					rotateClockwise,
				);
			});
			let genActionButtonRotateCounterClockwise = (() => {
				return genActionButton(
					props.rotateCounterClockwiseIcon,
					rotateCounterClockwise,
				);
			});
			let genActionButtonZoomIn = (() => {
				return genActionButton(
					props.zoomInIcon,
					zoomIn,
				);
			});
			let genActionButtonZoomOut = (() => {
				return genActionButton(
					props.zoomOutIcon,
					zoomOut,
				);
			});
			let internalImageDataURL = internalImageDataURLRef.value;
			let imageWidth = imageWidthRef.value;
			let imageHeight = imageHeightRef.value;
			let imageDataURL = imageDataURLRef.value;
			let flippedHorizontally = flippedHorizontallyRef.value;
			let flippedVertically = flippedVerticallyRef.value;
			let rotation = rotationRef.value;
			let zoom = zoomRef.value;
			return h(
				'div',
				{
					style: {
						display: 'inline-grid',
						gridTemplateColumns: '1fr auto',
						gridTemplateRows: '1fr auto',
					},
				},
				[
					h(
						'div',
						{
							style: {
								gridColumn: 1,
								gridRow: 1,
								overflow: 'hidden',
								position: 'relative',
							},
						},
						(internalImageDataURL
							? [h(
								'div',
								{
									style: {
										height: `${imageHeight}px`,
										pointerEvents: 'none',
										position: 'relative',
										width: `${imageWidth}px`,
									},
								},
								[h(
									'div',
									{
										style: {
											bottom: '50%',
											position: 'absolute',
											right: '50%',
											transform: 'translate(50%,50%)',
										},
									},
									[h(
										'img',
										{
											src: internalImageDataURL,
											style: {
												transform: [
													`scale(${zoom})`,
													`scale(${[
														flippedHorizontally ? -1 : 1,
														flippedVertically ? -1 : 1,
													].join(',')})`,
													`rotate(${rotation}rad)`,
												].join(' '),
												transition: 'all .3s cubic-bezier(.25,.8,.5,1)',
											},
										},
									)],
								)],
							)]
							: []
						),
					),
					h(
						'div',
						{
							style: {
								display: 'flex',
								flexDirection: 'column',
								gridColumn: 2,
								gridRow: 1,
								justifyContent: 'center',
							},
						},
						[
							h(
								VBtn,
								{
									icon: 'mdi-load',
									onClick: onClickToLoad,
								},
							),
							genActionButtonFlipHorizontally(),
							genActionButtonFlipVertically(),
							genActionButtonRotateClockwise(),
							genActionButtonRotateCounterClockwise(),
							genActionButtonZoomIn(),
							genActionButtonZoomOut(),
						],
					),
					h(
						'div',
						{
							style: {
								gridColumn: 1,
								gridRow: 2,
							},
						},
					),
				],
			);
		});
	},
});
