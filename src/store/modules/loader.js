import mutations from "@/store/mutations";

const { TOGGLE_LOADER } = mutations;

const loaderStore = {
  state: {
    isShowLoader: false
  },
  getters: {
    isShowLoader: ({ isShowLoader }) => isShowLoader
  },
  mutations: {
    [TOGGLE_LOADER](state, status) {
      state.isShowLoader = status;
    }
  },
  actions: {
    toggleLoader({ commit }, isShow) {
      commit(TOGGLE_LOADER, isShow);
    }
  }
};

export default loaderStore;
