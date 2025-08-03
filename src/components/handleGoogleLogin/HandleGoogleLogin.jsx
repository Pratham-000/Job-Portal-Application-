import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase"; // make sure provider is exported

const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    navigate("/"); // redirect on success
  } catch (error) {
    console.error("Google Login Error:", error.message);
  }
};
export default handleGoogleLogin;
