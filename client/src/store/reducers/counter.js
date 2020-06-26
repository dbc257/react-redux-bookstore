import * as actionTypes from "../actions/actionTypes";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type == actionTypes.ADD) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type == actionTypes.REMOVE) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  return state;
};

export default reducer;
