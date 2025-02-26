import {setPersistence, browserLocalPersistence,  signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

const backendLoginUrl = "https://lexisnap-server-v2.onrender.com/api/v2/auth/google-sign-in";

interface AuthResponse {
  accessToken: string;
  data: {
    _id: string;
    name: string;
    email: string;
    googleId: string;
    profilePicture: string;
    hasExtension: boolean;
  };
}

export const signInWithGoogle = async (): Promise<AuthResponse> => {
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

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Authentication failed with status: ${response.status}`);
    }
    
    const data: AuthResponse = await response.json();
    
    if (!data.accessToken) {
      throw new Error("No access token received from server");
    }

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.data));

    return data;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error; 
  }
};

