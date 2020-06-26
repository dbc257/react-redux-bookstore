// create the redux object
const redux = require("redux");

// create the initial state
const intialState = {
  counter: 0,
};

// getting a reference to the createStore function
const createStore = redux.createStore;

// create the reducer
const rootReducer = (state = intialState, action) => {
  if (action.type == "INCREMENT_COUNTER") {
    // update the counter by one

    // NEVER DO THIS
    //state.counter = state.counter + 1

    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type == "ADD_COUNTER") {
    //  + action.age + action.movie.title + action.movie.year

    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  return state;
};

const store = createStore(rootReducer);

console.log(store.getState());

// subscriptions
store.subscribe(() => {
  console.log("Subscription Fired!!");
});

// dispatching the actions
// increment counter so counter can be 1 more
store.dispatch({ type: "INCREMENT_COUNTER" });

console.log(store.getState());

// passing multiple objects to dispatch
//store.dispatch({ type : "ADD_COUNTER", value : 10, age : 12, movie : {title : "Some Movie", year : 1993}})

// add counter which means you can add a value to the existing counter
store.dispatch({ type: "ADD_COUNTER", value: 10 });

// add a new dispatch to DECREMENT the counter

// add a new dispatch to SUBTRACT_COUNT value = 10

console.log(store.getState());
