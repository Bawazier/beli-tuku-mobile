import http from '../../helper/http';
import qs from 'qs';

export default {
  login: (data) => ({
    type: 'LOGIN',
    payload: http().post('auth/login', qs.stringify(data)),
  }),

  signup: (data) => ({
    type: 'SIGNUP',
    payload: http().post('auth/signup', qs.stringify(data)),
  }),

  forgotPass: (data) => ({
    type: 'FORGOT_PASS',
    payload: http().patch('auth/forgot/password', qs.stringify(data)),
  }),

  resetPass: (id, data) => ({
    type: 'RESET_PASS',
    payload: http().patch(`auth/change/password/${id}`, qs.stringify(data)),
  }),

  logout: () => ({
    type: 'LOGOUT',
  }),
};
