export default {
	clearable: {
		type: Boolean,
		default: false,
	},

	flipHorizontallyText: {
		type: [Function, String],
		default: 'flip horizontally',
	},

	flipVerticallyText: {
		type: [Function, String],
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
		type: [Function, String],
		default: 'rotate clockwise',
	},

	rotateCounterclockwiseText: {
		type: [Function, String],
		default: 'rotate counterclockwise',
	},

	value: String,
};
