import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

// import manage from './modules/manage'

Vue.use(Vuex)


const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    // manage
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
