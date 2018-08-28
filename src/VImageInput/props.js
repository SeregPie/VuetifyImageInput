export default {
	value: String,

	imageWidth: {
		type: Number,
		default: 256,
	},

	imageHeight: {
		type: Number,
		default: 256,
	},

	imageFormat: {
		type: String,
		default: 'png',
	},

	encoderOptions: {},

	minImageWidth: {
		type: Number,
		default: 0,
	},

	maxImageWidth: {
		type: Number,
		default: Infinity,
	},

	minImageHeight: {
		type: Number,
		default: 0,
	},

	maxImageHeight: {
		type: Number,
		default: Infinity,
	},

	clearable: {
		type: Boolean,
		default: false,
	},

	croppable: {
		type: Boolean,
		default: false,
	},

	notMovable: {
		type: Boolean,
		default: false,
	},

	notFlippable: {
		type: Boolean,
		default: false,
	},

	notRotatable: {
		type: Boolean,
		default: false,
	},

	notZoomable: {
		type: Boolean,
		default: false,
	},

	// contain
};
