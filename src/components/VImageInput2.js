import {
	computed,
	customRef,
	defineComponent,
	h,
	resolveComponent,
	shallowRef,
	watch,
} from 'vue';
import {useGesture} from 'vue-use-gesture';

import Cccc from '../styles/Cccc';
import Transition from '../styles/Transition';
import PositionCenter from '../styles/PositionCenter';
import PositionRelative from '../styles/PositionRelative';
import PositionCover from '../styles/PositionCover';
import OverflowHidden from '../styles/OverflowHidden';
import InteractivityNone from '../styles/InteractivityNone';
import BackgroundCheckered from '../styles/BackgroundCheckered';
import loadImage from '../utils/loadImage';
import clamp from '../utils/clamp';
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
			let sx0 = props.imageWidth;
			let sy0 = props.imageHeight;
			let sx1 = internalImageWidthRef.value;
			let sy1 = internalImageHeightRef.value;
			let a = rotationRef.value;
			let sinA = Math.abs(Math.sin(a));
			let cosA = Math.abs(Math.cos(a));
			switch (props.imageMinScaling) {
				case 'cover':
					return Math.max(
						props.imageWidth / internalImageWidthRef.value,
						props.imageHeight / internalImageHeightRef.value,
					);
				case 'contain':
					return cosA + Math.min(sx0 / sy0, sx1 / sy2M

						props.imageHeight / aaaaHeightRef.value,
					);
					/*return Math.min(
						props.imageWidth / aaaaWidthRef.value,
						props.imageHeight / aaaaHeightRef.value,
					);*/
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
					let translationHorizontally = translationHorizontallyRef.value;
					let translationVertically = translationVerticallyRef.value;
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
					ctx.translate(translationHorizontally, translationVertically);
					ctx.drawImage(image, -imageWidth/2, -imageHeight/2);
					return canvas.toDataURL(`image/${imageFormat}`, imageQuality);
				}
				return null;
			},
			value => {
				imageDataURLRef.value = value;
			}
		);


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

		let animatedRef = shallowRef(true);

		let bind000 = useGesture({
			onDrag({delta: [x, y]}) {
				console.log('onDrag');
				translate(x, y);
			},
			onDragStart() {
				animatedRef.value = false;
			},
			onDragEnd() {
				animatedRef.value = true;
			},
		});

		return (() => {
			let VBtn = resolveComponent('VBtn');
			let genActionButton = ((
				icon,
				onClick,
			) => {
				let {disabled} = props;
				return h(
					VBtn,
					{
						disabled,
						icon,
						onClick,
					},
				);
			});
			let genActionButtonClear = (() => {
				return genActionButton(
					props.clearIcon,
					clear,
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
			let genZoomSlider = (() => {
				return h(
					'div',
					{
						style: {
							display: 'flex',
							justifyContent: 'space-between',
						},
					},
					[
						genActionButton(
							props.zoomOutIcon,
							zoomOut,
						),
						genActionButton(
							props.zoomInIcon,
							zoomIn,
						),
					],
				);
			});
			let {
				clearable,
				disabled,
				readonly,
			} = props;
			let internalImage = internalImageRef.value;
			let internalImageDataURL = internalImageDataURLRef.value;
			let imageWidth = imageWidthRef.value;
			let imageHeight = imageHeightRef.value;
			let imageDataURL = imageDataURLRef.value;
			let flippedHorizontally = flippedHorizontallyRef.value;
			let flippedVertically = flippedVerticallyRef.value;
			let translationHorizontally = translationHorizontallyRef.value;
			let translationVertically = translationVerticallyRef.value;
			let rotation = rotationRef.value;
			let zoom = zoomRef.value;
			let animated = animatedRef.value;
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
								...BackgroundCheckered(8, '#fff', '#000'),
								...OverflowHidden,
								...PositionRelative,
								gridColumn: 1,
								gridRow: 1,
								minHeight: `${imageHeight + 50}px`,
								minWidth: `${imageWidth + 50}px`,
							},
						},
						(internalImageDataURL
							? [h(
								'div',
								{
									style: {

										...PositionCenter,
										width: `${imageWidth}px`,
										height: `${imageHeight}px`,
									},
									onPointerdown: bind000().onPointerDown,
								},
								[
									h(
										'div',
										{
											style: {
												...PositionCenter,
												...InteractivityNone,
											},
										},
										[h(
											'img',
											{
												src: internalImageDataURL,
												style: {
													display: 'block',
													transform: [
														`scale(${zoom})`,
														`scale(${[
															flippedHorizontally ? -1 : 1,
															flippedVertically ? -1 : 1,
														].join(',')})`,
														`rotate(${rotation}rad)`,
														`translate(${translationHorizontally}px,${translationVertically}px)`,
													].join(' '),
													...(animated
														? {transition: 'all .3s cubic-bezier(.25,.8,.5,1)'}
														: {}
													),
												},
											},
										)],
									),
									h(
										'div',
										{
											style: {
												...PositionCover,
												boxShadow: `0 0 4000px 4000px ${'rgba(0,0,0,0.5)'}`,
												outline: `${4}px solid ${'#fff'}`,
											},
										},
									),
								],
							)]
							: [h(
								VBtn,
								{
									icon: 'mdi-upload',
									onClick: onClickToLoad,
								},
							)]
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
								...Transition,
								...(internalImage
									? {}
									: Cccc
								),
							},
						},
						[
							...(readonly
								? []
								: [
									...(clearable
										? [genActionButtonClear()]
										: []
									),
									genActionButtonFlipHorizontally(),
									genActionButtonFlipVertically(),
									genActionButtonRotateClockwise(),
									genActionButtonRotateCounterClockwise(),
								]
							),
							h(
								'div',
								{
									onClick() {
										translate(0, -10);
									},
								},
								'UP'
							),
							h(
								'div',
								{
									onClick() {
										translate(0, +10);
									},
								},
								'DOWN'
							),
							h(
								'div',
								{
									onClick() {
										translate(-10, 0);
									},
								},
								'LEFT'
							),
							h(
								'div',
								{
									onClick() {
										translate(+10, 0);
									},
								},
								'RIGHT'
							),
						],
					),
					h(
						'div',
						{
							style: {
								gridColumn: 1,
								gridRow: 2,
								...Transition,
								...(internalImage
									? {}
									: Cccc
								),
							},
						},
						(readonly
							? []
							: [
								genZoomSlider(),
								h(
									'div',
									{
										style: {
											whiteSpace: 'pre-wrap',
										},
									},
									JSON.stringify({
										translationHorizontally,
										translationVertically,
										zoom,
									}, null, '  '),
								),
							]
						),
					),
				],
			);
		});
	},
});
