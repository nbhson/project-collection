import { signUpApi } from '../../../api/auth';
import { ServerErrorHelper } from '../../../utils/helpers/server-errors.helper';
import type { User } from '../../../api/model/User';

export const signUp = (data: User, store: any, router: any, toast: any) => {
  store.dispatch('setFormLoading', true);
  store.dispatch('setErrMsg', '');

  signUpApi(data)
    .then(function (response) {
      store.dispatch('setFormLoading', false);
      store.dispatch('setErrMsg', '');
      if (response.statusText === 'OK' && response.data['email'] === data.email) {
        router.push('/sign-in');
        toast.success('Register account successfully');
      }
    })
    .catch(function (error) {
      store.dispatch('setFormLoading', false);
      store.dispatch('setErrMsg', ServerErrorHelper.getErrorMsg(error));
    });
};

export const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];
export const passwordRules = [
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length >= 6) || 'At least 6 characters',
];
export const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => (v && v.length >= 4) || 'At least 4 characters',
];
export const phoneRules = [
  (v: string) => !!v || 'Phone is required',
  (v: string) => Number.isInteger(Number(v)) || 'The value must be an integer number',
];
