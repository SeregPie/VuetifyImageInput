import '@fontsource/roboto/';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import {createVuetify} from 'vuetify';

export default createVuetify({
	defaults: {
		VCheckbox: {
			color: 'primary',
		},
	},
});
