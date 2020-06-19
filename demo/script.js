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
				minZoom: 'cover',
				resetable: true,
				resizable: true,
				rotatable: true,
				translatable: true,
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
