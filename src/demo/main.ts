import app from '@/app';
import head from '@/plugins/head';
import vuetify from '@/plugins/vuetify';

app.use(head).use(vuetify).mount('body');
