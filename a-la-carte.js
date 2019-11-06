import VImageInput from './index';

import {
	VBtn,
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
		VIcon,
		VProgressCircular,
		VSlider,
		VSpacer,
	},
	extends: VImageInput,
};
