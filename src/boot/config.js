import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import store from '../store/index'
const config = {
    apiKey: "AIzaSyD3cG0Wh3vWL-gTO44sA3Dqc3BZrAqJrHo",
    authDomain: "schoolsrepo.firebaseapp.com",
    projectId: "schoolsrepo",
    storageBucket: "schoolsrepo.appspot.com",
    messagingSenderId: "39575959182",
    appId: "1:39575959182:web:a5eacc38e36918075abbdf",
    measurementId: "G-HYBL1WSEJM"
};

firebase.initializeApp(config);

export function firebaseListener(func) {
    firebase.auth().onAuthStateChanged(
        function (user) {
            if (user) {
                console.log("User log in success", user);
                // store().commit('AUTH_STATUS_CHANGE')
                func(true, user);
            } else {
                console.log("User log in failed", user);
                func(false);
            }
        },
        function (error) {
            console.log(error);
        }
    );
}
firebaseListener(authStatusChange)
function authStatusChange(isLoggedIn, user) {
    if (user) {
        // localStorage.setItem('currentUseremail', user.email)
        // localStorage.setItem('currentUserid', user.uid)
            // console.log(user)
    //   store.commit("AUTH_STATUS_CHANGE");
      if (user) {
        console.log('user')
      } else {
  
  
      }
    }
  }
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export default {
    database: firebase.firestore(),
    auth: firebase.auth(),
    storage: firebase.storage(),
};