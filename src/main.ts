import app from '@/app';
import i18n from '@/plugins/i18n';
import vuetify from '@/plugins/vuetify';

app
	.use(i18n)
	.use(vuetify)
	.mount('body');
