(function() {

	new Vue({
		el: '#app',

		data: function() {
			return {
				clearable: true,
				dark: false,
				dialog: false,
				drawer: true,
				flipHorizontallyText: VuetifyImageInput.props.flipHorizontallyText.default,
				flipVerticallyText: VuetifyImageInput.props.flipVerticallyText.default,
				hideActions: VuetifyImageInput.props.hideActions.default,
				rotateClockwiseText: VuetifyImageInput.props.rotateClockwiseText.default,
				rotateCounterclockwiseText: VuetifyImageInput.props.rotateCounterclockwiseText.default,
				value: null,
			};
		},
	});
})();
