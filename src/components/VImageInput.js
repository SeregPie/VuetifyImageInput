let {
	computed,
	h,
	inject,
	reactive,
	ref,
} = VueDemi;

import FullHeight from '../styles/FullHeight';
import FullWidth from '../styles/FullWidth';
import CheckeredBackground from '../styles/CheckeredBackground';
import clamp from '../utils/clamp';

export default {
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
		value: String,
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
	setup(props) {
		let theme = inject('theme', {isDark: false});
		let darkRef = computed(() => theme.isDark);
		let statusLoading = {};
		let statusLoadingSuccess = {};
		let statusLoadingError = {};
		let loadingStatusRef = ref(null);
		let loadingProgressRef = ref(0);
		let load = (() => {
			// todo
		});
		let loadingRef = computed(() => {
			let status = loadingStatusRef.value;
			return status === statusLoading;
		});
		let loadingSuccessRef = computed(() => {
			let status = loadingStatusRef.value;
			return status === statusLoadingSuccess;
		});
		let loadingErrorRef = computed(() => {
			let status = loadingStatusRef.value;
			return status === statusLoadingError;
		});
		let rotateBy = (() => {
			// todo
		});
		let rotationDelta = 1/4;
		let rotateClockwise = (() => {
			let delta = rotationDelta;
			rotateBy(+delta);
		});
		let rotateCounterClockwise = (() => {
			let delta = rotationDelta;
			rotateBy(-delta);
		});
		let minZoomRef = computed(() => {
			// todo
			return 0;
		});
		let maxZoomRef = computed(() => {
			// todo
			return 1000;
		});
		let setZoom = (value => {
			// todo
		});
		let zoomBy = (n => {
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
		let flipHorizontally = (() => {
			// todo
		});
		let flipVertically = (() => {
			// todo
		});
		let clear = (() => {
			// todo
		});
		let reset = (() => {
			// todo
		});
		let state = reactive({
			dark: darkRef,
			loading: loadingRef,
			loadingError: loadingErrorRef,
			loadingSuccess: loadingSuccessRef,
			maxZoom: maxZoomRef,
			minZoom: minZoomRef,
			zoomDelta: zoomDeltaRef,
			zoomSnap: zoomSnapRef,
		});
		let genButton = (({
			icon,
			onClick,
		}) => {
			let {disabled} = props;
			return h(
				'VBtn',
				{
					class: 'ma-1',
					props: {
						disabled,
						flat: true,
						icon: true,
					},
					on: {
						click: onClick,
					},
				},
				[h(
					'VIcon',
					icon,
				)],
			);
		});
		let genButtonClear = (() => {
			let {clearIcon} = props;
			return genButton({
				icon: clearIcon,
				onClick: clear,
			});
		});
		let genButtonRotateClockwise = (() => {
			let {rotateClockwiseIcon} = props;
			return genButton({
				icon: rotateClockwiseIcon,
				onClick: rotateClockwise,
			});
		});
		let genButtonRotateCounterClockwise = (() => {
			let {rotateCounterClockwiseIcon} = props;
			return genButton({
				icon: rotateCounterClockwiseIcon,
				onClick: rotateCounterClockwise,
			});
		});
		let genButtonFlipHorizontally = (() => {
			let {flipHorizontallyIcon} = props;
			return genButton({
				icon: flipHorizontallyIcon,
				onClick: flipHorizontally,
			});
		});
		let genButtonFlipVertically = (() => {
			let {flipVerticallyIcon} = props;
			return genButton({
				icon: flipVerticallyIcon,
				onClick: flipVertically,
			});
		});
		let genButtonReset = (() => {
			let {resetIcon} = props;
			return genButton({
				icon: resetIcon,
				onClick: reset,
			});
		});
		let genButtons = (() => {
			let {
				clearable,
				flippable,
				resetable,
				rotatable,
			} = props;
			let result = [];
			[
				(clearable
					? [genButtonClear()]
					: []
				),
				[
					...(rotatable
						? [
							genButtonRotateClockwise(),
							genButtonRotateCounterClockwise(),
						]
						: []
					),
					...(flippable
						? [
							genButtonFlipHorizontally(),
							genButtonFlipVertically(),
						]
						: []
					),
				],
				(resetable
					? [genButtonReset()]
					: []
				),
			].forEach(v => {
				if (v.length > 1) {
					result.push(h(
						'div',
						{
							style: {
								display: 'inherit',
								flexDirection: 'inherit',
							},
						},
						v,
					))
				} else
				if (v.length) {
					result.push(v[0]);
				}
			});
			return result;
		})
		let genSliderZoom = (() => {
			let {
				disabled,
				zoomInIcon,
				zoomOutIcon,
			} = props;
			let {
				maxZoom,
				minZoom,
				zoomSnap,
			} = state;
			return h(
				'VSlider',
				{
					class: 'ma-1',
					props: {
						appendIcon: zoomInIcon,
						disabled,
						hideDetails: true,
						max: maxZoom,
						min: minZoom,
						prependIcon: zoomOutIcon,
						step: zoomSnap,
						value: undefined,
					},
					on: {
						'click:append': zoomIn,
						'click:prepend': zoomOut,
						end() {},
						input() {},
						start() {},
					},
				},
			);
		});
		return (() => {
			let {
				fullHeight,
				fullWidth,
				imageHeight,
				imageWidth,
				zoomable,
			} = props;
			let {dark} = state;
			return h(
				'div',
				{
					style: {
						display: ['-ms-inline-grid', 'inline-grid'],
						gridColumns: '1fr auto',
						gridRows: '1fr auto',
						gridTemplateColumns: '1fr auto',
						gridTemplateRows: '1fr auto',
						...(fullWidth ? FullWidth : {}),
						...(fullHeight ? FullHeight : {}),
					},
				},
				[
					h(
						'div',
						{
							style: {
								gridColumn: 1,
								gridRow: 1,
								position: 'relative',
							},
						},
						[
							h(
								'div',
								{
									style: {
										height: `${imageHeight}px`,
										margin: '50px',
										width: `${imageWidth}px`,
										...(dark
											? CheckeredBackground(16, '#fff', '#000')
											: CheckeredBackground(16, '#f00', '#0f0')
										),
									},
								},
							),
							h(
								'VFadeTransition',
								{
									props: {
										leaveAbsolute: true,
									},
								},
								[],
							),
						],
					),
					h(
						'div',
						{
							style: {
								display: 'flex',
								flexDirection: 'column',
								gridColumn: 2,
								gridRow: 1,
								justifyContent: 'space-between',
								transition: 'opacity 0.3s cubic-bezier(0.25,0.8,0.5,1)',
							},
						},
						genButtons(),
					),
					h(
						'div',
						{
							style: {
								gridColumn: 1,
								gridRow: 2,
								transition: 'opacity 0.3s cubic-bezier(0.25,0.8,0.5,1)',
							},
						},
						(zoomable
							? [genSliderZoom()]
							: []
						),
					),
				],
			);
		});
	},
};
