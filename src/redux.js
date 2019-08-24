import { createStore } from "redux";
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    // incrementBy: incremementBy //asimplify
    incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy
  };
};

const setCount = (payload = {}) => {
  return {
    type: "SET",
    count: payload.set
  };
};
const resetCount = () => {
  return { type: "RESET" };
};

//REDUCERS
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      // const incrementBy =
      //   typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.count };
    default:
      return state;
  }
};
const store = createStore(countReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// }); // this will be called everytime the store changes.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 12
// });
store.dispatch(incrementCount({ incrementBy: 60 }));
store.dispatch(setCount({ set: -5000 }));
store.dispatch(decrementCount({ decrementBy: 5000 }));
// unsubscribe();
store.dispatch(resetCount());