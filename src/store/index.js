import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    currentPage: 1,
  };
};

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    getCurrentPage: state => {
      return state.currentPage;
    },
  },
  mutations: {
    SET_CURRENT_PAGE: (state, currentPage) => {
      state.currentPage = currentPage;
    },
  },
  actions: {
    setCurrentPAge: ({ commit }, { currentPage }) => {
      commit('SET_CURRENT_PAGE', currentPage);
    },
  }
});


