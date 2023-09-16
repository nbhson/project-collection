import type { User } from '../api/model/User';

const userCountingModule = {
  state() {
    return {
      users: [],
      isUpdate: false,
    };
  },
  getters: {
    usersOnline(state: any) {
      return state.users;
    },
    isUpdate(state: any) {
      return state.isUpdate;
    },
  },
  mutations: {
    SET_USER: (state: any, users: User[]) => {
      state.users = [];
      state.users = [...users];
    },
    SET_UPDATE: (state: any, update: boolean) => {
      state.isUpdate = update;
    },
  },
  actions: {
    setUser: (context: any, users: User[]) => {
      context.commit('SET_USER', users);
    },
    setIsUpdate: (context: any, update: boolean) => {
      console.log(update);
      context.commit('SET_UPDATE', update);
    },
  },
};

export default userCountingModule;
