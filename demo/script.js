(function() {

	let {createApp} = Vue;

	let app = createApp({
		components: {
			[VuetifyImageInput.name]: VuetifyImageInput,
		},
	});

	app.mount('body');

})();
