import Vue from 'vue';
import Vuex from 'vuex';
import VuexFire from 'vuexfire';
import firebaseApp from '@/store/firebase';

Vue.use(Vuex);
Vue.use(VuexFire);

const db = firebaseApp.database();

export default new Vuex.Store({
  state: {
    aromas: null,
    recipes: null,
    user: null,
  },
  mutations: {
    ...VuexFire.mutations,
    setUser(state, value) {
      state.user = value;
    },
  },
  actions: {
    saveAroma(store, aroma) {
      const aromaToSave = Object.assign({}, aroma);
      delete aromaToSave['.key'];
      return db.ref(`/aromas/${aroma['.key']}`).set(aromaToSave);
    },
  },
  getters: {
    aromas(state) {
      return state.aromas;
    },
    recipes(state) {
      return state.recipes;
    },
  },
});
