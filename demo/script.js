(() => {

	new Vue({
		el: '#App',
		vuetify: new Vuetify(),
		data() {
			return {
				clearable: VuetifyImageInput.props.clearable.default,
				disabled: VuetifyImageInput.props.disabled.default,

				fileInfo: null,
				fullHeight: VuetifyImageInput.props.fullHeight.default,
				fullWidth: VuetifyImageInput.props.fullWidth.default,
				hideActions: VuetifyImageInput.props.hideActions.default,
				image: null,
				imageHeight: VuetifyImageInput.props.imageHeight.default,
				imageMinScaling: VuetifyImageInput.props.imageMinScaling.default,
				imageWidth: VuetifyImageInput.props.imageWidth.default,
				readonly: VuetifyImageInput.props.readonly.default,
				ui: {
					drawer: true,
					snackbar: {
						fileInfo: false,
					},
				},
			};
		},
		computed: {
			dark: {
				get() {
					return this.$vuetify.theme.dark;
				},
				set(value) {
					this.$vuetify.theme.dark = value;
				},
			},
		},
		methods: {
			onFileInfo(value) {
				this.fileInfo = value;
				this.ui.snackbar.fileInfo = true;
			},
		},
	});

})();
