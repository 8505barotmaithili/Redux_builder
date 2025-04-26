const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "REDUCE":
      return state - action.payload;
    default:
      return state;
  }
};
