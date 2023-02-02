import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
//import {registerGlobalComponents} from "./utils/import"

// form
import * as VeeValidate from "vee-validate";
import VueCreditCardValidation from 'vue-credit-card-validation';

//tailwindcss
import "./assets/styles/tailwind.css"
import "./assets/styles/global.css"

import store from "./vuex/store";

loadFonts()

let app;
app = createApp(App);
  app.use(router);
  app.use(vuetify);
  app.use(VeeValidate);
  app.use(VueCreditCardValidation);
  app.use(store),
 // app.registerGlobalComponents(app);
  app.mount('#app')
