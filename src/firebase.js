// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn0W1E2iBmGh6Ka-VziPObyPOJtO-QKws",
  authDomain: "uploading-file-6f789.firebaseapp.com",
  projectId: "uploading-file-6f789",
  storageBucket: "uploading-file-6f789.appspot.com",
  messagingSenderId: "553507275251",
  appId: "1:553507275251:web:bec6a5b6fb9544514f5286"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);