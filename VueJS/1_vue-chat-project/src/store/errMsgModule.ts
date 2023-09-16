const errMsgModule = {
  state() {
    return {
      errMsg: '',
    };
  },
  getters: {
    errMsg(state: any): string {
      return state.errMsg;
    },
  },
  mutations: {
    SET_ERR_MESSAGE: (state: any, errMsg: string) => {
      if (typeof errMsg === 'string') {
        state.errMsg = errMsg;
      }
    },
  },
  actions: {
    setErrMsg: (context: any, errMsg: string) => {
      context.commit('SET_ERR_MESSAGE', errMsg);
    },
  },
};

export default errMsgModule;
