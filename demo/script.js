(function() {

	let {
		computed,
		createApp,
		ref,
	} = Vue;
	let {createVuetify} = Vuetify;

	let app = createApp({
		components: {
			[VuetifyImageInput.name]: VuetifyImageInput,
		},
		setup() {
			let darkRef = ref(true);
			let toggleTheme = (() => {
				darkRef.value = !darkRef.value;
			});
			let themeRef = computed(() => {
				let dark = darkRef.value;
				console.log(dark ? 'dark' : 'light');
				return dark ? 'dark' : 'light';
			});
			return {
				theme: themeRef,
				toggleTheme,
			};
		},
	});
	let vuetify = createVuetify();
	app.use(vuetify);
	app.mount('body');

})();
