const initialState = {
  data: [],
  token: '',
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: action.payload.data.token,
      };
    }
    case 'SIGNUP_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SIGNUP_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'SIGNUP_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case 'FORGOT_PASS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'FORGOT_PASS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'FORGOT_PASS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.validate,
      };
    }
    case 'RESET_PASS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'RESET_PASS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'RESET_PASS_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        data: [],
        token: '',
      };
    }
    default: {
      return state;
    }
  }
};
