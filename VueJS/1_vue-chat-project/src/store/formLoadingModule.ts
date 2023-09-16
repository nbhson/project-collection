const formLoadingModule = {
  state() {
    return {
      formLoading: false,
    };
  },
  getters: {
    formLoading(state: any): string {
      return state.formLoading;
    },
  },
  mutations: {
    SET_FORM_LOADING: (state: any, formLoading: boolean) => {
      if (typeof formLoading === 'boolean') {
        state.formLoading = formLoading;
      }
    },
  },
  actions: {
    setFormLoading: (context: any, formLoading: boolean) => {
      context.commit('SET_FORM_LOADING', formLoading);
    },
  },
};

export default formLoadingModule;
