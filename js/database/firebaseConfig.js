// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXFHNPGSQvoQA1wjSWE0gmNkQafDCfIKs",
  authDomain: "propstube-be898.firebaseapp.com",
  databaseURL: "https://propstube-be898-default-rtdb.firebaseio.com",
  projectId: "propstube-be898",
  storageBucket: "propstube-be898.appspot.com",
  messagingSenderId: "392580946193",
  appId: "1:392580946193:web:4ddd2402ae77c0ce5754b0",
  measurementId: "G-S466ZSWCVF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const database = firebase.database();