import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyD8C14PalGmP-yxRSTk4MNoakIm3cNAzvo",
  authDomain: "react-chat-7f81e.firebaseapp.com",
  databaseURL: "https://react-chat-7f81e.firebaseio.com",
  projectId: "react-chat-7f81e",
  storageBucket: "react-chat-7f81e.appspot.com",
  messagingSenderId: "815380066886"
};
const fire = firebase.initializeApp(config);
export default fire;