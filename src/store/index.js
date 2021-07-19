import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgurls: [],
    artiname: [],
    albumname: []
  },
  mutations: {
    imgurlsput (state, val) {
      state.imgurls.push(val)
    },
    artinameput (state, val) {
      state.artiname.push(val)
    },
    albumnameput (state, val) {
      state.albumname.push(val)
    }
  },
  actions: {},
  modules: {}
})
