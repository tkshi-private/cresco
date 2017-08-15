import * as firebase from "firebase";
import users from './store/user'
var config = {
  apiKey: "AIzaSyAqC7F7EsNb5cfdkXBOiZQRwbTxjTSZdL8",
  authDomain: "n-license.firebaseapp.com",
  databaseURL: "https://n-license.firebaseio.com",
  projectId: "n-license",
  storageBucket: "n-license.appspot.com",
  messagingSenderId: "328051668232"
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


export const register = (user)=>{
  firebase.database().ref('users/' + user.uid).set({
    ...user
  });
}

export const identificationImgURLregister = (value)=>{
  firebase.database().ref('identificationImgURL/').set({
    value: value
  });
}

export const upload = (cb)=>{
  var up = document.getElementById('up');
  var fileButton = document.getElementById('fileButton');

  fileButton.addEventListener('change', function(e){
    var file = e.target.files[0];
    var ref = firebase.storage().ref('images' + file.name);

    var task = ref.put(file);
      task.on('state_changed', function progress(snapshot){
          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           up.value = percentage;
           console.log('Uploaded a blob or file!');
        },
        function error(err){

        },
        function complete(){

        }

    );
  });

}



export const getUser = (uid,cb)=>{
  firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
    cb(snapshot.val())
  });
}

export const getidentificationImgURL = (cb)=>{
  firebase.database().ref('/identificationImgURL/').on('value',function(snapshot) {
    cb(snapshot.val())
  });
}


export const login = ()=>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      users.getMyUser().uid = user.uid
      users.getMyUser().email = user.email
      users.getMyUser().displayName = user.displayName
      users.getMyUser().photoURL = user.photoURL

    } else {

    }
  });
  firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;

    })
}
