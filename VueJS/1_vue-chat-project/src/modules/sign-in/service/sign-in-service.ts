import { signInApi } from '../../../api/auth';
import { userInfoApi, setLoginStatusApi } from '../../../api/user';
import { ServerErrorHelper } from '../../../utils/helpers/server-errors.helper';

export const signUp = (data: any, store: any, router: any, toast: any, cookies: any) => {
  store.dispatch('setFormLoading', true);
  store.dispatch('setErrMsg', '');

  signInApi(data.email, data.password)
    .then(function (response) {
      if (response.status === 200 && response.data.jwt) {
        cookies.set('jwt', response.data.jwt, response.data.exp);
        store.dispatch('setJwt', response.data.jwt);
      }

      return userInfoApi();
    })
    .then(function (response) {
      store.dispatch('setFormLoading', false);
      store.dispatch('setErrMsg', '');
      if (response.status === 200 && response.data) {
        store.dispatch('setAuth', response.data);
        store.dispatch('setIsUpdate', true);
        router.push('/');
      }
      setLoginStatusApi(true, store.getters.user._id);
    })
    .catch(function (error) {
      console.log(error);

      store.dispatch('setFormLoading', false);
      store.dispatch('setErrMsg', ServerErrorHelper.getErrorMsg(error));
    });
};

export const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];
export const passwordRules = [(v: string) => !!v || 'Password is required'];
