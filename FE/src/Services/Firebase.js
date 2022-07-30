import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu4WS5QJgOnc7GuDe_E489W2_W5EvFPWo",
  authDomain: "evsmart-se1503.firebaseapp.com",
  projectId: "evsmart-se1503",
  storageBucket: "evsmart-se1503.appspot.com",
  messagingSenderId: "431732675397",
  appId: "1:431732675397:web:d144795a727fc6499ea42c",
  measurementId: "G-H0L0M9X5BE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (callBackFunction) => {
  try {
    const result = await signInWithPopup(auth, provider);
    if (result) {
        const token = await result.user.getIdToken();
        console.log(token);
        callBackFunction();
    }
  } catch (error) {
    alert(error);
  }
};
