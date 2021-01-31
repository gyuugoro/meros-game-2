import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    character: '',
    level: '',
    infos: [],
  },
  mutations: {
    changeName(state, v) {
      state.name = v
    }
  },
  actions: {
  },
})
