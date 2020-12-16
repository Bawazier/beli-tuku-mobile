const initialState = {
  quantity: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    case 'RESET':
      return {
        ...state,
        quantity: 0,
      };
    default: {
      return state;
    }
  }
};
