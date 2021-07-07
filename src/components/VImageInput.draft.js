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
		let setWidth = ((v) => {
			// todo
		});
		let setHeight = ((v) => {
			// todo
		});
		let setZoom = ((v) => {
			// todo
		});
		let flipHorizontally = (() => {
			// todo
		});
		let flipVertically = (() => {
		// todo
		});
		let rotate = ((n) => {
			// todo
		});
		let move = ((x, y) => {
			// todo
		});
		let reset  = (() => {
			// todo
		});
		let clear = (() => {
			// todo
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
		let minZoom = undefined;
		let maxZoom = undefined;
		let zoom = undefined;
		let zoomIn = (() => {
			// todo
		});
		let zoomOut = (() => {
			// todo
		});

		let onDrag = (() => {

		});
		return (() => {});
	},
});
