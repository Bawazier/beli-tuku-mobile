import http from '../../helper/http';

export default {
  login: (data) => ({
    type: 'LOGIN',
    payload: http().post('auth/login', data),
  }),

  signup: (data) => ({
    type: 'SIGNUP',
    payload: http().post('auth/register/customer', data),
  }),
};
