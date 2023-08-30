// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;



/**
 
  apiKey: "AIzaSyDIrx_1VRu5uD3lv4g3ATW9cpVIKfJp84Q",
  authDomain: "education-site-assignment-10.firebaseapp.com",
  projectId: "education-site-assignment-10",
  storageBucket: "education-site-assignment-10.appspot.com",
  messagingSenderId: "675149630437",
  appId: "1:675149630437:web:14e5c8704ec1416b663d0c"
 */