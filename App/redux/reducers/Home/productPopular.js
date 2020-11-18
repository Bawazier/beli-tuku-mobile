const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_POPULAR_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_PRODUCTS_POPULAR_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Load Populer Products Fail',
      };
    }
    case 'GET_PRODUCTS_POPULAR_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.rows,
      };
    }
    default: {
      return state;
    }
  }
};
