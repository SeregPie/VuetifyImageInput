import VImageInput from './index';

import {
	VBtn,
	VCard,
	VIcon,
	VProgressCircular,
	VSlider,
	VSpacer,
} from 'vuetify/lib';

let {name} = VImageInput;

export default {
	name,
	components: {
		VBtn,
		VCard,
		VIcon,
		VProgressCircular,
		VSlider,
		VSpacer,
	},
	extends: VImageInput,
};
