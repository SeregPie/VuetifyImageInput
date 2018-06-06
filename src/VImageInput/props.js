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

	movable: {
		type: Boolean,
		default: false,
	},

	flippable: {
		type: Boolean,
		default: false,
	},

	rotatable: {
		type: Boolean,
		default: false,
	},

	zoomable: {
		type: Boolean,
		default: false,
	},

	// contain
};
