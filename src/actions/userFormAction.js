export const userFormAction = payload => dispatch => {
  dispatch({
    type: "USER_FORM_ACTION",
    payload: payload
  });
};
