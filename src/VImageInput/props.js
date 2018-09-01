export default {
	clearable: {
		type: Boolean,
		default: false,
	},

	flipHorizontallyTooltip: {
		type: String,
		default: 'flip horizontally',
	},

	flipVerticallyTooltip: {
		type: String,
		default: 'flip vertically',
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

	notRotatable: {
		type: Boolean,
		default: false,
	},

	rotateClockwiseTooltip: {
		type: String,
		default: 'rotate clockwise',
	},

	rotateCounterclockwiseTooltip: {
		type: String,
		default: 'rotate counterclockwise',
	},

	value: String,
};
