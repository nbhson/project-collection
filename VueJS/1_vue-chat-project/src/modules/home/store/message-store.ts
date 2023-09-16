const store = {
  state() {
    return {
      msg: [],
    };
  },
  getters: {
    msg(state: any): string {
      return state.msg;
    },
  },
  mutations: {
    SET_MSG: (state: any, msg: any[]) => {
      state.msg = msg;
    },
    REMOVE_MSG: (state: any) => {
      state.msg = [];
    },
  },
  actions: {
    setMsg: (context: any, msg: any[]) => {
      context.commit('SET_MSG', msg);
    },
    removeMsg: (context: any) => {
      context.commit('REMOVE_MSG');
    },
  },
};

export default store;
