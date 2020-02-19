import * as actionTypes from "./actionTypes";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Axios from "../AxiosInstance";

export const checkLogStatus = dispatch => {
  return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: actionTypes.LOGGED_IN, payload: user.displayName });
      }
    });
  };
};

const __logOut = dispatch => {
  return (dispatch, getState) => {
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

export const signInEmail = (email, password) => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(result => {
            return dispatch({
              type: actionTypes.LOGGED_IN,
              payload: result.user.displayName
            });
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            return dispatch({
              type: actionTypes.ERROR,
              payload: { title: errorCode, text: errorMessage }
            });
          });
      });
  };
};
export const signUpEmail = state => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(state.Email, state.password)
      .then(result => {
        result.user.updateProfile({
          displayName: state.firstName,
          phoneNumber: state.MobileNumber
        });
        Axios.post("/users.json", {
          uid: result.user.uid,
          Email: state.Email,
          MobileNumber: state.MobileNumber,
          firstName: state.firstName,
          lastName: state.lastName
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          return dispatch({
            type: actionTypes.ERROR,
            payload: { title: errorCode, text: errorMessage }
          });
        });
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
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
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
      });
  };
};
export const loginFacebook = dispatch => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
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
