import Vue from 'vue'

import {library}                                   from '@fortawesome/fontawesome-svg-core'
import {faInstagram, faTelegram, faVk, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon}                           from '@fortawesome/vue-fontawesome'

library.add(
	faVk,
	faTelegram,
	faInstagram,
	faWhatsapp
)

Vue.component('icon', FontAwesomeIcon)
