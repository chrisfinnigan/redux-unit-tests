const defaultState = {
  first_name: "",
  last_name: "",
  age: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "USER_FORM_ACTION":
      return Object.assign({}, state, {
        [action.payload.field]: action.payload.value
      });

    default:
      return state;
  }
};
