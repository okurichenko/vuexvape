import Vue from 'vue';
import Vuex from 'vuex';
import VuexFire from 'vuexfire';

Vue.use(Vuex);
Vue.use(VuexFire);

export default new Vuex.Store({
  state: {
    aromas: null,
    user: null,
  },
  mutations: {
    ...VuexFire.mutations,
    setUser(state, value) {
      state.user = value;
    },
  },
  getters: {
    aromas(state) {
      return state.aromas;
    },
  },
});
