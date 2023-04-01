import {createI18n} from 'vue-i18n';

import localeEn from '@/locales/en.json';

export default createI18n({
	legacy: false,
	locale: 'en',
	messages: {
		['en']: localeEn,
	},
});
