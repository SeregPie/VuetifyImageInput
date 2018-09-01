(function() {

	new Vue({
		el: '#app',

		data: function() {
			return {
				clearable: true,
				dark: false,
				dialog: false,
				drawer: true,
				flipHorizontallyTooltip: VuetifyImageInput.props.flipHorizontallyTooltip.default,
				flipVerticallyTooltip: VuetifyImageInput.props.flipVerticallyTooltip.default,
				notFlippable: VuetifyImageInput.props.notFlippable.default,
				notRotatable: VuetifyImageInput.props.notRotatable.default,
				rotateClockwiseTooltip: VuetifyImageInput.props.rotateClockwiseTooltip.default,
				rotateCounterclockwiseTooltip: VuetifyImageInput.props.rotateCounterclockwiseTooltip.default,
				value: null,
			};
		},
	});
})();
