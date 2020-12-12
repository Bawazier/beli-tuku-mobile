const initialState = {
  dataProduct: {},
  dataReviews: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
  isReviewsError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_PRODUCT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_DETAIL_PRODUCT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataProduct: action.payload.data.results,
      };
    }
    case 'GET_DETAIL_PRODUCT_REVIEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_PRODUCT_REVIEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isReviewsError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_DETAIL_PRODUCT_REVIEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isReviewsError: false,
        dataReviews: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    default: {
      return state;
    }
  }
};
