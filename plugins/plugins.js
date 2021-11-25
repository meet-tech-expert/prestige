import Vue from 'vue'
import VuexPersistence from 'vuex-persist'
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format'
import infiniteScroll from 'vue-infinite-scroll'
const VueScrollTo = require('vue-scrollto')
import VueModalTor from 'vue-modaltor/dist/vue-modaltor.common.js'
import 'vue-modaltor/dist/vue-modaltor.css'
import VueTimeago from 'vue-timeago';
Vue.use(VueModalTor)
Vue.use(infiniteScroll)
Vue.use(VueFilterDateFormat, {
  dayOfWeekNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayOfWeekNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'],
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  // Timezone offset, in minutes (0 - UTC, 180 - Russia, undefined - current)
  timezone: 0,
})

Vue.use(VueScrollTo)
Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  })
export default ({ store }) => {
  new VuexPersistence({
    /* your options */
  }).plugin(store)
}
