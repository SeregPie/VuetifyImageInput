import {defineComponent, h} from 'vue';
import {VBtn, VSlider} from 'vuetify/components';

export default defineComponent({
	name: 'VImageInput',

	components: {
		VBtn,
		VSlider,
	},

	props: {
		modelValue: String,
		width: Number,
		height: Number,
	},

	setup(props, {slots, emit, expose}) {
		return () => {
			return h('div', 'hello');
		};
	},
});
