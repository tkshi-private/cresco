import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyAqC7F7EsNb5cfdkXBOiZQRwbTxjTSZdL8",
    authDomain: "n-license.firebaseapp.com",
    databaseURL: "https://n-license.firebaseio.com/",
};
firebase.initializeApp(config);
var provider = new firebase.auth.FacebookAuthProvider();
var database = firebase.database();



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
      console.log(user)
      console.log({
        ...user.providerData
      })

      firebase.database().ref('users/' + user.uid).set({
        ...user.providerData
      });
    })
}
