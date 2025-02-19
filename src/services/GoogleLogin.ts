import {setPersistence, browserLocalPersistence,  signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

const backendLoginUrl = "https://lexisnap-server-v2.onrender.com/api/v2/auth/google-sign-in"; 

export const signInWithGoogle = async () => {
  try {

    // Set persistence to remember the user even after closing the browser
    await setPersistence(auth, browserLocalPersistence);

    const result = await signInWithPopup(auth, googleProvider);
    
    const idToken = await result.user.getIdToken();
    
    const response = await fetch(backendLoginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });

    if (!response.ok) throw new Error("Authentication failed");
    
    const data = await response.json(); 
    
    localStorage.setItem("accessToken", data?.accessToken);

    return data;
  } catch (error) {
    console.error("Google Sign-In Error:", (error as Error).message);
    return null;
  }
};

