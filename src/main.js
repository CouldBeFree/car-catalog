import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import store from './store';
import Vuex from "vuex";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import router from './router'; 

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Vuex);

new Vue({
  store,
  router, 
  vuetify: new Vuetify({
    icons: {
      iconfont: 'md',
    },
  }),
  render: h => h(App),
}).$mount('#app');
