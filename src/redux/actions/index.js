export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const incrementAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increment(5)), 1500);
};

export const decrementAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrement()), 2500);
};
