import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

  created(){
      const config = {
          apiKey: "AIzaSyBefLlS6yIb7Mzj_lMdBrA_yw7pKkUYSzE",
          authDomain: "ad-project-a2258.firebaseapp.com",
          databaseURL: "https://ad-project-a2258.firebaseio.com",
          projectId: "ad-project-a2258",
          storageBucket: "",
          messagingSenderId: "331096064555"
      };

      fb.initializeApp(config)
  }
})
