import {ActionSheet} from 'native-base';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_DATA': {
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    }
    case 'INCREMENT': {
      state.data.map((item, index) => {
        if (item.id === action.id) {
          console.log(state.data[index].quantity);
          return state.data[index].quantity + 1;
        }
      });
    }
    case 'DECREMENT': {
      state.data.map((item, index) => {
        if (item.id === action.id) {
          state.data[index].quantity - 1;
        }
        return {
          ...state,
        };
      });
    }
    case 'POP_DATA': {
      state.data.map((item, index) => {
        if (item.id === action.id) {
          state.data.slice(index, 1);
        }
        return {
          ...state,
        };
      });
    }
    default: {
      return state;
    }
  }
};
