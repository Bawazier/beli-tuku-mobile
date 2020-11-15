import http from '../../helper/http';

export default {
  getProfile: (token) => ({
    type: 'GET_PROFILE',
    payload: http(token).get('customer/profile/account'),
  }),

  updateProfile: (token, data) => ({
    type: 'UPDATE_PROFILE',
    payload: http(token).patch('customer/profile/account', data),
  }),
};
