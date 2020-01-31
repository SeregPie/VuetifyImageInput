(function() {

	new Vue({
		el: '#app',
		vuetify: new Vuetify(),
		data: function() {
			return {
				clearable: true,
				disabled: false,
				drawer: true,
				flippable: true,
				fullHeight: false,
				fullWidth: false,
				imageHeight: 256,
				imageWidth: 256,
				rotatable: true,
				value: null,
				zoomable: true,
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
			rtl: {
				get: function() {
					return this.$vuetify.rtl;
				},
				set: function(value) {
					this.$vuetify.rtl = value;
				},
			},
		},
	});

})();
