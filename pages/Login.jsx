import { useState } from "react";
import { motion } from "framer-motion";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import handleGoogleLogin from "../src/components/handleGoogleLogin/HandleGoogleLogin";

// 
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const newErrors = {
      email: email ? "" : "Email is required",
      password: password ? "" : "Password is required",
    };
    setErrors(newErrors);

    if (!email || !password) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // 
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    }
  });

  return () => unsubscribe(); // Cleanup
}, []);


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#1e293b] p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Login to Your Account
        </h2>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-[#334155] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-[#334155] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Login
          </button>
        </div>
        

     <button
              onClick={handleGoogleLogin}
              className="mt-6 mx-auto flex items-center gap-2 bg-white text-gray-800 font-semibold py-2 px-4 rounded-md shadow hover:bg-gray-100 transition"

            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google logo"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>



      </motion.div>
    </div>
  );
};

export default Login;
