import { messageApi } from '../../../api/message';
import { usersOnlineApi } from '../../../api/user';
import { SERVER_ERROR } from '../../../utils/constants/commons';

export const allMessage = (store: any, toast: any, scrollToEnd: any) => {
  messageApi()
    .then(function (response) {
      if (response.status === 200 && response.data) {
        store.dispatch('setMsg', response.data);
      }
    })
    .catch(function (error) {
      toast.error(SERVER_ERROR);
    });
};

export const allUserOnline = (store: any, toast: any) => {
  usersOnlineApi()
    .then(function (response) {
      if (response.status === 200 && response.data) {
        store.dispatch('setUser', response.data);
      }
    })
    .catch(function (error) {
      toast.error(SERVER_ERROR);
    });
};
