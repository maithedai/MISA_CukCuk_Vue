import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import moment from 'moment'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'devextreme/dist/css/dx.light.css';
import VTooltip from 'v-tooltip'
import './globalComponents';
import Toast from "./components/Base/Toast/index";
import './css/var-icon.scss';
import Swal from 'sweetalert2/src/sweetalert2.js'

import vueDebounce from 'vue-debounce'

Vue.use(vueDebounce)
Vue.use(VTooltip)
Vue.use(Toast);

Vue.prototype.moment = moment
Vue.prototype.$alerFunction = function(icon, title) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    Toast.fire({
        icon: icon,
        title: title
    })
 }

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
