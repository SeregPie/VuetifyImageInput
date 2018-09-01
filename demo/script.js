(function() {

	new Vue({
		el: '#app',

		data: function() {
			return {
				clearable: true,
				dark: false,
				dialog: false,
				drawer: true,
				hideActions: VuetifyImageInput.props.hideActions.default,
				value: null,
			};
		},
	});
})();
