const initialState = {
  token: '',
  isLoading: false,
  isError: false,
  alertMsg: '',

  isSignupError: false,

  isForgotPassError: false,

  emailValidData: [],
  isEmailError: false,
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
        isSignupError: true,
        alertMsg: action.payload,
      };
    }
    case 'SIGNUP_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isSignupError: false,
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
        isForgotPassError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'FORGOT_PASS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isForgotPassError: false,
      };
    }
    case 'VALIDATE_FORGOT_PASS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'VALIDATE_FORGOT_PASS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isEmailError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'VALIDATE_FORGOT_PASS_FULFILLED': {
      return {
        ...state,
        isEmailError: false,
        isLoading: false,
        emailValidData: action.payload.data.validate,
      };
    }
    case 'LOGOUT': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
