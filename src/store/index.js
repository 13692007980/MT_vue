import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import login from './login.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    businessArr: [],
    businessItemBool : false,

    CityBool: false,

    LocationCity: '',

    Star: '',

    loadingBool: false,

    AllIficationBool: false
  },
  mutations,
  modules: {
    login
  }
})
