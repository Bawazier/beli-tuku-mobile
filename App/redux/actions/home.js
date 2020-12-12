import http from '../../helper/http';

export default {
  newProducts: (page = 0, limit = 30) => ({
    type: 'GET_PRODUCTS_NEW',
    payload: http().get(`/public/products/?page=${page}&limit=${limit}`),
  }),
  popularProducts: (page = 0, limit = 30) => ({
    type: 'GET_PRODUCTS_POPULAR',
    payload: http().get(`/public/products/?page=${page}&limit=${limit}`),
  }),
  listCategories: (search = '', page = 0, limit = 30) => ({
    type: 'GET_LIST_CATEGORIES',
    payload: http().get(
      `/public/categories/?search=${search}&page=${page}&limit=${limit}`,
    ),
  }),
  catalogSearch: (
    searchName = '',
    searchCategory = '',
    searchColor = '',
    searchSize = '',
    searchStore = '',
    searchStatus = '',
  ) => ({
    type: 'CATALOG_RESULTS',
    pyaload: http().get(
      '/public/products/' +
        `?/search=${searchName || ''}&searchColor=${
          searchColor || ''
        }&searchSize=${searchSize || ''}&searchStore=${
          searchStore || ''
        }&searchCategory=${searchCategory || ''}&searchStatus=${
          searchStatus || ''
        }`,
    ),
  }),
  catalogSort: (sortBy = 'createdAt', sortType = 'DESC') => ({
    type: 'CATALOG_RESULTS',
    pyaload: http().get(
      '/public/products/' + `?/sortBy=${sortBy}&sortType=${sortType}`,
    ),
  }),
  // catalogFilter: () => ({
  //   type: 'CATALOG_RESULTS',
  //   payload: http().get('/public/products/' + `?/color[${index}]=${values}`),
  // }),
  detailProduct: (id_product) => ({
    type: 'GET_DETAIL_PRODUCT',
    payload: http().get(`/public/products/${id_product}`),
  }),

  detailProductReviews: (id_product) => ({
    type: 'GET_DETAIL_PRODUCT_REVIEWS',
    payload: http().get(`/public/product/reviews/${id_product}`),
  }),
};
