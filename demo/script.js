(function() {

	new Vue({
		el: '#app',
		vuetify: new Vuetify(),
		data: function() {
			return {
				clearable: VuetifyImageInput.props.clearable.default,
				disabled: VuetifyImageInput.props.disabled.default,
				drawer: true,
				fullHeight: VuetifyImageInput.props.fullHeight.default,
				fullWidth: VuetifyImageInput.props.fullWidth.default,
				hideActions: VuetifyImageInput.props.hideActions.default,
				imageHeight: VuetifyImageInput.props.imageHeight.default,
				imageMinScaling: VuetifyImageInput.props.imageMinScaling.default,
				imageWidth: VuetifyImageInput.props.imageWidth.default,
				readonly: VuetifyImageInput.props.readonly.default,
				value: null,
			};
		},
		computed: {
			dark: {
				get: function() {
					return this.$vuetify.theme.dark;
				},
				set: function(value) {
					this.$vuetify.theme.dark = value;
				},
			},
		},
	});

})();
