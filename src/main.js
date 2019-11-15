import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import 'moment/locale/fr'
import VueMoment from 'vue-moment'

Vue.config.productionTip = false

Vue.use(VueMoment, {
  moment
})

new Vue({
  render: h => h(App)
}).$mount('#app')
