(function() {

	var backgroundColorValues = [
		undefined,
		'#e8aca0',
		'#3a7fd8',
		'#f92036',
	];

	new Vue({
		el: '#app',

		data: function() {
			return {
				backgroundColorIndex: 0,
				backgroundColorValues: backgroundColorValues,
				clearable: VuetifyImageInput.props.clearable.default,
				dark: false,
				dialog: false,
				disabled: VuetifyImageInput.props.disabled.default,
				drawer: true,
				fullHeight: VuetifyImageInput.props.fullHeight.default,
				fullWidth: VuetifyImageInput.props.fullWidth.default,
				hideActions: VuetifyImageInput.props.hideActions.default,
				imageHeight: VuetifyImageInput.props.imageHeight.default,
				imageWidth: VuetifyImageInput.props.imageWidth.default,
				outputScale: VuetifyImageInput.props.outputScale.default,
				minScaling: VuetifyImageInput.props.minScaling.default,
				readonly: VuetifyImageInput.props.readonly.default,
				value: null,
			};
		},

		computed: {
			backgroundColor: function() {
				return this.backgroundColorValues[this.backgroundColorIndex];
			},
		},
	});

})();
