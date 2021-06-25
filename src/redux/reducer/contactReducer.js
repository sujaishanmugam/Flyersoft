const initialState = [
  {
    id: 0,
    name: "sujai shanmugam",
    date: "Thu Jun 17 2021 00:00:00 GMT+0530 (India Standard Time)",
    number: 8754791121
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};

export default contactReducer;
