import * as actionTypes from "./actionTypes";
const messageState = {
  loggedIn: false,
  error: null,
  displayName: null,
  data: null
};
const mainReducer = (state = messageState, action) => {
  switch (action.type) {
    case actionTypes.LOGGED_IN:
      return { ...state, loggedIn: true, displayName: action.payload };
    case actionTypes.LOGGED_OUT:
      return { ...state, loggedIn: false };
    case actionTypes.ERROR:
      return {
        ...state,
        error: { title: action.payload.title, text: action.payload.text }
      };
    case actionTypes.RESET:
      return { ...state, error: null };
    default:
      return state;
  }
};
export default mainReducer;
