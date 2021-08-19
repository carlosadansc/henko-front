import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './firebase'
import AOS from 'aos';
import 'aos/dist/aos.css';
import{ init } from 'emailjs-com';
init("user_KlhwQzG7EmnguJ6n8hwtu");
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/swiper-bundle.css'
 
Vue.use(VueAwesomeSwiper)
// ..
AOS.init();

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
//axios.defaults.baseURL = 'http://localhost:3000/henko-api/v1/';
axios.defaults.baseURL = 'https://henkosite.herokuapp.com/henko-api/v1/';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
