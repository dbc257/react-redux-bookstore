import * as actionTypes from "../actions/actionTypes";

const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDGLOBALBOOKS: {
      return {
        ...state,
        books: state.books.concat(action.payload),
      };
    }
    default:
      return state;
  }
};

export default reducer;

// const reducer = (state = initialState, action) => {
//   if (action.type == actionTypes.ADDGLOBALBOOKS) {
//     return {
//       ...state,
//       books: state.books.concat(action.payload),
//     };
//   }

//   return state;
// };

// export default reducer;
