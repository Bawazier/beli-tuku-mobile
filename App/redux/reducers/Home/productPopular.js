const initialState = {
  data: [],
  imagesPrimary: [],
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
        data: action.payload.data.respone,
        imagesPrimary: action.payload.data.imagesPrimary,
      };
    }
    default: {
      return state;
    }
  }
};
