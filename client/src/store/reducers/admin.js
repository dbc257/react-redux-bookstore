import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAdmin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADMINISTRATOR: {
      return {
        ...state,
        isAdmin: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
