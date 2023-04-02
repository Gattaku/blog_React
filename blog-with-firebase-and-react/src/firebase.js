import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDrDya55wPaEtWHNbb3YdVd_jqEhf4kxgk",
  authDomain: "blog-react-e1a11.firebaseapp.com",
  projectId: "blog-react-e1a11",
  storageBucket: "blog-react-e1a11.appspot.com",
  messagingSenderId: "574156426810",
  appId: "1:574156426810:web:175a59e669f5f62389ef03",
  measurementId: "G-2CG8LGVJK7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};