import Vue from 'vue';
import Vuex from 'vuex';
import itemsManager from '@/store/modules/itemsManager';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    itemsManager,
  },
});
