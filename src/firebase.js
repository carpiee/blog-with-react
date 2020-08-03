import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDiqPQxj0Mpn_odyHrp4mmw7ym8tKXDfTM",
  authDomain: "blog-7fabd.firebaseapp.com",
  databaseURL: "https://blog-7fabd.firebaseio.com",
  projectId: "blog-7fabd",
  storageBucket: "blog-7fabd.appspot.com",
  messagingSenderId: "506463851273",
  appId: "1:506463851273:web:67bb6e6bd2c55807ef39d8",
};
const db = firebase.initializeApp(firebaseConfig);

export default db;
