import { AUTH_ERROR, UNKNOWN_ERROR } from '../constants/commons';

export class ServerErrorHelper {
  static getErrorMsg(responseData: any) {
    try {
      let errorMessage: string = responseData.response.data.message;
      let authentication: boolean = responseData.response.status === 401;
      return errorMessage ? errorMessage : authentication ? AUTH_ERROR : UNKNOWN_ERROR;
    } catch (error) {
      return UNKNOWN_ERROR;
    }
  }
}
