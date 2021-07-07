(() => {

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
			return {
				clearable: shallowRef(false),
				disabled: shallowRef(false),
				hideActions: shallowRef(false),
				image: shallowRef(null),
				imageMinScaling: shallowRef('cover'),
				readonly: shallowRef(false),
			};
		},
	});
	let vuetify = createVuetify();
	app.use(vuetify);
	app.mount('body');

})();
