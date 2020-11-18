const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ACCOUNT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ACCOUNT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'get ACCOUNT failed',
      };
    }
    case 'GET_ACCOUNT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.results,
      };
    }
    case 'UPDATE_ACCOUNT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_ACCOUNT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'update ACCOUNT failled',
      };
    }
    case 'UPDATE_ACCOUNT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};
