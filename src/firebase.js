import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyAqC7F7EsNb5cfdkXBOiZQRwbTxjTSZdL8",
    authDomain: "n-license.firebaseapp.com",
    databaseURL: "https://n-license.firebaseio.com/",
};
firebase.initializeApp(config);
var provider = new firebase.auth.FacebookAuthProvider();
var database = firebase.database();

export const onLogin = (callback)=>{
  firebase.auth().onAuthStateChanged(function(user) {
    callback(user.providerData[0])
  });
}

export const onLogout = (callback)=>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    } else {
      callback()
    }
  });
}

export const getCurrentUser = ()=>{
  if( firebase.auth().currentUser ){
    return firebase.auth().currentUser
  }else{
    return false
  }
}

export const logout = ()=>{
  firebase.auth().signOut()
}

export const login = ()=>{
  firebase.auth().signInWithRedirect(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...

      firebase.database().ref('users/' + user.uid).set({
        ...user.providerData
      });
    })
}
