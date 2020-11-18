const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_CATEGORY_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_PRODUCTS_CATEGORY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Load Search Products Fail',
      };
    }
    case 'GET_PRODUCTS_CATEGORY_FULFILLED': {
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
