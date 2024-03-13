import '@/styles.scss';

import app from '@/app';
import vuetify from '@/plugins/vuetify';

// prettier-ignore
(app
  .use(vuetify)
  .mount('body')
);
