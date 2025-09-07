import "./style.css";
import {createApp} from "vue";
import {MyRoot} from "./components/root";
import {MyVuetifyPlugin} from "./plugins/vuetify";

createApp(MyRoot)
  .use(MyVuetifyPlugin)
  .mount("body");
