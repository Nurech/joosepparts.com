import Vue from 'vue'
import App from './App.vue'
import { rtdbPlugin } from 'vuefire'
Vue.use(rtdbPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import { db } from './db'

export default {
  data() {
    return {
      documents: [],
    }
  },

  firebase: {
    documents: db.ref('documents'),
  },
}