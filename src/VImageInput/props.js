export default {
	clearable: {
		type: Boolean,
		default: false,
	},

	flipHorizontallyText: {
		type: String,
		default: 'flip horizontally',
	},

	flipVerticallyText: {
		type: String,
		default: 'flip vertically',
	},

	hideActions: {
		type: Boolean,
		default: false,
	},

	imageEncoderOptions: {},

	imageHeight: {
		type: Number,
		default: 256,
	},

	imageType: {
		type: String,
		default: 'png',
	},

	imageWidth: {
		type: Number,
		default: 256,
	},

	notFlippable: {
		type: Boolean,
		default: false,
	},

	rotateClockwiseText: {
		type: String,
		default: 'rotate clockwise',
	},

	rotateCounterclockwiseText: {
		type: String,
		default: 'rotate counterclockwise',
	},

	value: String,
};
