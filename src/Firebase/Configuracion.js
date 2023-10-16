import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyD548n3j1eQdN1xmDcmRLeanZzLMP5rNHs",
  authDomain: "goiri-joyas-5242a.firebaseapp.com",
  projectId: "goiri-joyas-5242a",
  storageBucket: "goiri-joyas-5242a.appspot.com",
  messagingSenderId: "605181609855",
  appId: "1:605181609855:web:ffcfa35fa331e6614f7c4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)