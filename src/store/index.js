import Vue from 'vue'
import Vuex from 'vuex'

import embedded from './modules/embedded'
import country_select from './modules/country_select'

Vue.use(Vuex)

// Load store modules dynamically.
const requireContext = require.context('./modules', false, /.*\.js$/)

// const modules = requireContext.keys()
//   .map(file =>
//     [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
//   )
//   .reduce((modules, [name, module]) => {
//     if (module.namespaced === undefined) {
//       module.namespaced = true
//     }
//
//     return { ...modules, [name]: module }
//   }, {})

const modules =  {
    embedded,country_select
  };

export default new Vuex.Store({
  modules
})
