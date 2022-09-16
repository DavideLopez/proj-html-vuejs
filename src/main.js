import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown, faChevronRight, faHeart, faMagnifyingGlass,faLayerGroup, faDisplay, faArrowsToEye, faMaximize, faGear, faArrowUp, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck, faCopyright, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faGithub, faInstagram, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(
  faMagnifyingGlass,
  faUser,
  faGithub,
  faAngleDown,
  faUser,
  faStackOverflow,
  faHeart,
  faCopyright,
  faAngleDown,
  faChevronRight, 
  faLayerGroup, 
  faDisplay, 
  faArrowsToEye, 
  faArrowRight,
  faMaximize, 
  faFacebook,
  faCircleCheck, 
  faGear,
  faArrowUp,
  faEnvelope,
  faFacebook,
  faTwitter,
  faInstagram,)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
