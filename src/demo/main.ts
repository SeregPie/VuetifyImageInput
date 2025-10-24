import './style.css';

import {createApp} from 'vue';
import {MyApp} from './components/app';
import {myVuetifyPlugin} from './plugins/vuetify';

createApp(MyApp)
  .use(myVuetifyPlugin)
  .mount('body');
