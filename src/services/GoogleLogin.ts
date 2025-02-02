export const handleGoogleLoginSuccess = async (credentialResponse) => {
  try {
    const { credential } = credentialResponse;

    const response = await fetch(
      "https://lexisnap-server-v2.onrender.com/api/v2/auth/google-sign-in",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken: credential }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to log in");
    }

    const data = await response.json();

    if (data.success) {
      console.log("Login Successful:", data);
      localStorage.setItem("accessToken", data.accessToken);
    } else {
      console.error("Login Failed:", data.message);
    }
  } catch (error) {
    console.error("Error during login:", error.message);
  }
};
