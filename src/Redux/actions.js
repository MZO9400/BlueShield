import * as actionTypes from "./actionTypes";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const tryLogIn = () => {
  return (dispatch, getState) => {
    const tokenGoogle = localStorage.getItem("googleFireBaseAuthUser");
    const tokenFacebook = localStorage.getItem("facebookFireBaseAuthUser");
    if (tokenGoogle !== null) {
      var credential = firebase.auth.GoogleAuthProvider.credential(
        null,
        tokenGoogle
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(response => {
          dispatch({ type: actionTypes.LOGGED_IN });
        });
    } else if (tokenFacebook !== null) {
      credential = firebase.auth.GoogleAuthProvider.credential(
        null,
        tokenFacebook
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(response => {
          dispatch({ type: actionTypes.LOGGED_IN });
        });
    }
  };
};
const __logOut = dispatch => {
  return (dispatch, getState) => {
    localStorage.removeItem("googleFireBaseAuthUser");
    localStorage.removeItem("facebookFireBaseAuthUser");
    firebase
      .auth()
      .signOut()
      .then(response => dispatch({ type: actionTypes.LOGGED_OUT }))
      .catch(error => {});
  };
};

export const logOut = dispatch => {
  return dispatch => {
    __logOut(dispatch);
  };
};

export const logIn = () => {
  return dispatch => {
    tryLogIn(dispatch);
  };
};

export const signInEmail = (email, password) => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        return dispatch({ type: actionTypes.LOGGED_IN });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return dispatch({
          type: actionTypes.ERROR,
          payload: { title: errorCode, text: errorMessage }
        });
      });
  };
};
export const signUpEmail = (email, password) => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        return dispatch({ type: actionTypes.LOGGED_IN });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return dispatch({
          type: actionTypes.ERROR,
          payload: { title: errorCode, text: errorMessage }
        });
      });
  };
};
export const loginGoogle = dispatch => {
  return (dispatch, getState) => {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(providerGoogle)
      .then(result => {
        var token = result.credential.accessToken;
        localStorage.removeItem("googleFireBaseAuthUser");
        localStorage.setItem("googleFireBaseAuthUser", token);
        return dispatch({ type: actionTypes.LOGGED_IN });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return dispatch({
          type: actionTypes.ERROR,
          payload: { title: errorCode, text: errorMessage }
        });
      });
  };
};
export const loginFacebook = dispatch => {
  return (dispatch, getState) => {
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(providerFacebook)
      .then(result => {
        var token = result.credential.accessToken;
        localStorage.removeItem("facebookFireBaseAuthUser");
        localStorage.setItem("facebookFireBaseAuthUser", token);
        return dispatch({ type: actionTypes.LOGGED_IN });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return dispatch({
          type: actionTypes.ERROR,
          payload: { title: errorCode, text: errorMessage }
        });
      });
  };
};
export const resetErrorCode = () => {
  return (dispatch, getState) => {
    return dispatch({
      type: actionTypes.RESET
    });
  };
};
