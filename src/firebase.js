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
var provider = new firebase.auth.GoogleAuthProvider();

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


export const test = (cb) =>{
    var telLead = document.getElementById('telBtn')
    var telBtn = document.getElementById('tel-Upload')

    telLead.addEventListener('click', function(){
        telBtn.style.display = 'block';
    });
}

export const upload = ()=>{
  var up = document.getElementById('up');
  var fileButton = document.getElementById('fileButton');

  fileButton.addEventListener('click', function(e){
    var file = e.target.files[0];
    var ref = firebase.storage().ref('images/' + file.name);

    var metadata = {
      contentType: 'image/png',
    };

    var task = ref.put(file,metadata);
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

export const canvasUpload = (cb)=>{
  var canvas = document.getElementById('mycanvas');
  var metadata = {
    contentType: 'image/png',
  };



    var message = canvas.toDataURL("image/png");
    console.log(message.slice(0,30));

    var test = message.replace( "data:image/png;base64,", "" ) ;
    var ref = firebase.storage().ref('sign/' + (new Date()).getTime() + ".png");
    console.log(test.slice(0,30));



    ref.getDownloadURL().then(function(test) {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', test);
      xhr.send();
      // Or inserted into an <img> element:
      var img = document.getElementById('myimg');
      img.src = test;
    }).catch(function(error) {
      // Handle any errors
    });

    ref.putString(test,'base64' ,metadata).then(function(snapshot) {
        console.log('Uploaded a raw string!');
        // TODO: save snapshot.downloadURL to mobx store
        cb();
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
