import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase"; // Adjust the path if needed

const HandleGoogleSignUp = async (navigate) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Google user:", result.user);
    navigate("/");
  } catch (error) {
    console.error("Google sign-in error:", error.message);
  }
};

export default HandleGoogleSignUp;
