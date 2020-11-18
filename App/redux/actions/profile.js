import http from '../../helper/http';
import qs from 'qs';

export default {
  getProfile: (token) => ({
    type: 'GET_ACCOUNT',
    payload: http(token).get('customer/profile/account'),
  }),

  updateProfile: (token, data) => ({
    type: 'UPDATE_ACCOUNT',
    payload: http(token).patch('customer/profile/account', qs.stringify(data)),
  }),

  updateProfileImage: (token, data) => ({
    type: 'UPDATE_ACCOUNT',
    payload: http(token).patch('customer/profile/account', data),
  }),

  postAddress: (token, data) => ({
    type: 'POST_ADDRESS',
    payload: http(token).post('customer/profile/address', qs.stringify(data)),
  }),

  updateAddress: (id, token, data) => ({
    type: 'UPDATE_ADDRESS',
    payload: http(token).patch(
      `customer/profile/address/${id}`,
      qs.stringify(data),
    ),
  }),

  getAddress: (token, search = '', page = 0, limit = 10) => ({
    type: 'GET_ADDRESS',
    payload: http(token).get(
      `customer/profile/address/?search=${search}&page=${page}&limit=${limit}`,
    ),
  }),

  getAddressId: (id, token) => ({
    type: 'GET_ADDRESS_ID',
    payload: http(token).get(`customer/profile/address/${id}`),
  }),
};
