(function() {

	new Vue({
		el: '#app',

		data: function() {
			return {
				clearable: true,
				dark: false,
				dialog: false,
				drawer: true,
				notFlippable: VuetifyImageInput.props.notFlippable.default,
				notRotatable: VuetifyImageInput.props.notRotatable.default,
				value: null,
			};
		},
	});

})();
