// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCYT9lH_x9uKNpE_lccwmbwSN2MGR3xmSc",
//     authDomain: "crud-19bfd.firebaseapp.com",
//     databaseURL: "https://crud-19bfd.firebaseio.com",
//     projectId: "crud-19bfd",
//     storageBucket: "crud-19bfd.appspot.com",
//     messagingSenderId: "963559430780",
//     appId: "1:963559430780:web:0ca820b567bf2339a707f9"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>


import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCYT9lH_x9uKNpE_lccwmbwSN2MGR3xmSc",
  authDomain: "crud-19bfd.firebaseapp.com",
  databaseURL: "https://crud-19bfd.firebaseio.com",
  projectId: "crud-19bfd",
  storageBucket: "crud-19bfd.appspot.com",
  messagingSenderId: "963559430780",
  appId: "1:963559430780:web:0ca820b567bf2339a707f9"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// const dbRef = firebase.database().ref('crud');
// export const database = dbRef;