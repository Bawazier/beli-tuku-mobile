import http from '../../helper/http';

export default {
  findCategories: (search = '', page = 0, limit = 10) => ({
    type: 'GET_CATEGORIES',
    payload: http().get(
      `home/categories/?search=${search}&page=${page}&limit=${limit}`,
    ),
  }),
  new: (page = 0, limit = 10) => ({
    type: 'GET_PRODUCTS_NEW',
    payload: http().get(`home/product/news/?page=${page}&limit=${limit}`),
  }),
  popular: (page = 0, limit = 10) => ({
    type: 'GET_PRODUCTS_POPULAR',
    payload: http().get(`home/product/news/?page=${page}&limit=${limit}`),
  }),
  search: (search = '', page = 0, limit = 10) => ({
    type: 'SEARCH_PRODUCTS',
    payload: http().get(
      `home/product/search/?search=${search}&page=${page}&limit=${limit}`,
    ),
  }),
  byCategory: (id, page = 0, limit = 10) => ({
    type: 'GET_PRODUCTS_CATEGORY',
    payload: http().get(
      `home/product/category/${id}?page=${page}&limit=${limit}`,
    ),
  }),
};
