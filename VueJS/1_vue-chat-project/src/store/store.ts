import { createStore } from 'vuex';
import authModule from './authModule';
import formLoadingModule from './formLoadingModule';
import errMsgModule from './errMsgModule';
import userCountingModule from './userCountingModule';

const store = createStore({
  modules: {
    auth: authModule,
    loading: formLoadingModule,
    errMsg: errMsgModule,
    userCounting: userCountingModule,
  },
});

export default store;
