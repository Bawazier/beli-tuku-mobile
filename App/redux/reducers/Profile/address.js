const initialState = {
  data: [],
  dataById: {},
  pageInfo: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'get ADDRESS failed',
      };
    }
    case 'GET_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.rows,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'GET_ADDRESS_ID_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ADDRESS_ID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'get ID ADDRESS failed',
      };
    }
    case 'GET_ADDRESS_ID_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataById: action.payload.data.results,
      };
    }
    case 'POST_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'POST_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'post ADDRESS failed',
      };
    }
    case 'POST_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case 'UPDATE_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'UPDATE ADDRESS failed',
      };
    }
    case 'UPDATE_ADDRESS_FULFILLED': {
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
