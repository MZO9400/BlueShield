import firebase from "firebase";
import React from 'react';
var firebaseConfig = {
  apiKey: "AIzaSyCaNAwoDYb6CtK8igj5qMZfvrHYoMIa_vY",
  authDomain: "reactinsurancewebsite.firebaseapp.com",
  databaseURL: "https://reactinsurancewebsite.firebaseio.com",
  projectId: "reactinsurancewebsite",
  storageBucket: "reactinsurancewebsite.appspot.com",
  messagingSenderId: "427264314659",
  appId: "1:427264314659:web:c18c90a88556a6c69a9096",
  measurementId: "G-Q6YR3K2TLL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

window.fbAsyncInit = function() {
  FB.init({
    appId: "712427819294180",
    cookie: true,
    xfbml: true,
    version: "v6.0"
  });

  FB.AppEvents.logPageView();
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});
async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=712427819294180&autoLogAppEvents=1"
/*
  RESPONSE:

{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}
  FB.logout();
  FB.login();

  <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="false"></div>

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
*/

export default firebase;
