import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from "./vuex/store"
import VueClipboard from 'vue3-clipboard'
// form
import * as VeeValidate from "vee-validate"
import VueCreditCardValidation from 'vue-credit-card-validation'

//tailwindcss
import "./assets/styles/tailwind.css"
import "./assets/styles/global.css"
//fontawesome
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import FontAwesomeIcon from "@/plugins/fontawesome-icons";

loadFonts()

let app;
app = createApp(App);
  app.use(router);
  app.use(vuetify);
  // app.use(VeeValidate);
  app.use(VueCreditCardValidation);
  // app.component('fa',FontAwesomeIcon)
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.use(store);
  app.use(VueClipboard,{
    autoSetContainer: true,
    appendToBody: true,
  });
  app.mount('#app')
