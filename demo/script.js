(function() {

	new Vue({
		el: '#app',

		data: function() {
			return {
				clearable: VuetifyImageInput.props.clearable.default,
				dark: false,
				dialog: false,
				disabled: VuetifyImageInput.props.disabled.default,
				drawer: true,
				hideActions: VuetifyImageInput.props.hideActions.default,
				readonly: VuetifyImageInput.props.readonly.default,
				value: null,
			};
		},
	});
})();
