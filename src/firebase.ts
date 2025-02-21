// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAbKvWb41ITGEYxGxwhwPFLdBDL_XJY4wo",
	authDomain: "nwitter-3eb10.firebaseapp.com",
	projectId: "nwitter-3eb10",
	storageBucket: "nwitter-3eb10.firebasestorage.app",
	messagingSenderId: "184045547187",
	appId: "1:184045547187:web:c17df873855b418b1b0ac6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
