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
    allAromas: null,
    allRecipes: null,
    eliquidBases: null,
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

    createAroma(store, aroma) {
      const aromaToSave = Object.assign({
        userId: store.state.user.uid,
      }, aroma);
      return db.ref('/aromas/').push(aromaToSave);
    },
  },
  getters: {
    aromas(state) {
      return state.allAromas.filter(aroma => aroma.userId === state.user.uid);
    },
    recipes(state) {
      return state.allRecipes.filter(recipe => recipe.userId === state.user.uid);
    },
  },
});
