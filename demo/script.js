(function() {

	new Vue({
		el: '#app',
		vuetify: new Vuetify(),
		data: function() {
			return {
				drawer: true,
				clearable: VuetifyImageInput.props.clearable.default,
				disabled: VuetifyImageInput.props.disabled.default,
				fullHeight: VuetifyImageInput.props.fullHeight.default,
				fullWidth: VuetifyImageInput.props.fullWidth.default,
				hideActions: VuetifyImageInput.props.hideActions.default,
				imageHeight: VuetifyImageInput.props.imageHeight.default,
				imageWidth: VuetifyImageInput.props.imageWidth.default,
				minScaling: VuetifyImageInput.props.minScaling.default,
				readonly: VuetifyImageInput.props.readonly.default,
				value: null,
			};
		},
	});

})();
