import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    
        apiKey: "AIzaSyDlG1H0NpbbzHdhpWt0oO-sZCSD2T6e0hY",
        authDomain: "proyecto-react-msv.firebaseapp.com",
        projectId: "proyecto-react-msv",
        storageBucket: "proyecto-react-msv.appspot.com",
        messagingSenderId: "1060243592339",
        appId: "1:1060243592339:web:55d2ef0bb592f056972966"
      
};

const firebaseApp = initializeApp( firebaseConfig );
export const db = getFirestore( firebaseApp );
// Initialize Firebase