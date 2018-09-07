(function() {

	new Vue({
		el: '#app',

		data: function() {
			return {
				clearable: true,
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
