import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

const backendLoginUrl = "https://lexisnap-server-v2.onrender.com/api/v2/auth/google-sign-in"; 

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
    const idToken = await result.user.getIdToken();
    console.log(idToken);
    const response = await fetch(backendLoginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });

    if (!response.ok) throw new Error("Authentication failed");
    
    const data = await response.json(); 
    
    localStorage.setItem("accessToken", data.accessToken);

    console.log("Login successful:", data.data);
    return data;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    return null;
  }
};
