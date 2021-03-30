(function() {

	let {
		createApp,
		shallowRef,
	} = Vue;
	let {createVuetify} = Vuetify;

	let app = createApp({
		components: {
			[VuetifyImageInput.name]: VuetifyImageInput,
		},
		setup() {
			let image = shallowRef(null);
			return {
				image,
			};
		},
	});
	let vuetify = createVuetify();
	app.use(vuetify);
	app.mount('body');

})();
