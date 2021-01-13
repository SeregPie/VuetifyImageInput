let {
	computed,
	h,
	reactive,
	ref,
} = VueDemi;

import FullHeight from '../styles/FullHeight';
import FullWidth from '../styles/FullWidth';

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
		let state = reactive({
			loading: loadingRef,
			loadingError: loadingErrorRef,
			loadingSuccess: loadingSuccessRef,
		});
		return (() => {
			let {
				cancelIcon,
				clearable,
				clearIcon,
				disabled,
				errorIcon,
				flipHorizontallyIcon,
				flippable,
				flipVerticallyIcon,
				fullHeight,
				fullWidth,
				imageBackgroundColor,
				imageHeight,
				imageMaxHeight,
				imageMaxWidth,
				imageMinHeight,
				imageMinWidth,
				imageWidth,
				maxZoom,
				minZoom,
				resetable,
				resetIcon,
				resizable,
				rotatable,
				rotateClockwiseIcon,
				rotateCounterClockwiseIcon,
				successIcon,
				translatable,
				uploadIcon,
				value,
				zoomable,
				zoomInIcon,
				zoomOutIcon,
			} = props;
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
								justifyContent: 'center',
								transition: 'opacity 0.3s cubic-bezier(0.25,0.8,0.5,1)',
							},
						},
						[
							...(clearable
								? [
									h(
										'VBtn',
										{
											class: 'ma-1',
											props: {
												disabled,
												flat: true,
												icon: true,
											},
											on: {
												click() {},
											},
										},
										[h(
											'VIcon',
											clearIcon,
										)],
									),
									h('VSpacer'),
								]
								: []
							),
							...(rotatable
								? [
									h(
										'VBtn',
										{
											class: 'ma-1',
											props: {
												disabled,
												flat: true,
												icon: true,
											},
											on: {
												click() {},
											},
										},
										[h(
											'VIcon',
											rotateClockwiseIcon,
										)],
									),
									h(
										'VBtn',
										{
											class: 'ma-1',
											props: {
												disabled,
												flat: true,
												icon: true,
											},
											on: {
												click() {},
											},
										},
										[h(
											'VIcon',
											rotateCounterClockwiseIcon,
										)],
									),
								]
								: []
							),
							...(flippable
								? [
									h(
										'VBtn',
										{
											class: 'ma-1',
											props: {
												disabled,
												flat: true,
												icon: true,
											},
											on: {
												click() {},
											},
										},
										[h(
											'VIcon',
											flipHorizontallyIcon,
										)],
									),
									h(
										'VBtn',
										{
											class: 'ma-1',
											props: {
												disabled,
												flat: true,
												icon: true,
											},
											on: {
												click() {},
											},
										},
										[h(
											'VIcon',
											flipVerticallyIcon,
										)],
									),
								]
								: []
							),
							...(resetable
								? [
									h('VSpacer'),
									h(
										'VBtn',
										{
											class: 'ma-1',
											props: {
												disabled,
												flat: true,
												icon: true,
											},
											on: {
												click() {},
											},
										},
										[h(
											'VIcon',
											resetIcon,
										)],
									),
								]
								: []
							),
						],
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
							? [h(
								'VSlider',
								{
									class: 'ma-1',
									props: {
										appendIcon: zoomInIcon,
										disabled,
										hideDetails: true,
										//max,
										//min,
										prependIcon: zoomOutIcon,
										//step,
										//value,
									},
									on: {
										'click:append'() {},
										'click:prepend'() {},
										end() {},
										input() {},
										start() {},
									},
								},
							)]
							: []
						),
					),
				],
			);
		});
	},
};
