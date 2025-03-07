import { useState } from "react";
import { motion } from "framer-motion";
import doctor from "../assests/doctor.png";
import patient from "../assests/patient.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userType, setUserType] = useState("patient");
  const navigate = useNavigate();

  const transition = { type: "spring", stiffness: 120, damping: 15 };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#C2E6FF] to-[#FFFFFF] p-6">
      <div className="bg-gradient-to-b from-[#D7EFFF] to-[#FFFFFF] shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full">
        
        {/* Image Container (Smooth Switch) */}
        <motion.div
          initial={false}
          animate={{ x: userType === "patient" ? 0 : -20, opacity: 1 }}
          transition={transition}
          className={`flex-1 ${userType === "patient" ? "order-first" : "order-last"}`}
        >
          <img
            src={userType === "patient" ? patient : doctor}
            alt="Login"
            className="max-w-xs md:max-w-sm"
          />
        </motion.div>

        {/* Form Container (Moves with Image) */}
        <motion.div
          initial={false}
          animate={{ x: userType === "patient" ? 0 : 20, opacity: 1 }}
          transition={transition}
          className="flex-1 max-w-md w-full"
        >
          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="relative flex bg-gray-200 rounded-full p-1">
              <button
                onClick={() => setUserType("doctor")}
                className="relative px-6 py-2 rounded-full text-gray-700 z-10"
              >
                Doctor
              </button>
              <button
                onClick={() => setUserType("patient")}
                className="relative px-6 py-2 rounded-full text-gray-700 z-10"
              >
                Patient
              </button>
              <motion.div
                layoutId="activeButton"
                className="absolute top-0 bottom-0 w-1/2 bg-[#4CC0BF] rounded-full"
                initial={false}
                animate={{ left: userType === "doctor" ? "0%" : "50%" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
          </div>

          {/* Login Form */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={false}
            animate={{ x: 0, opacity: 1 }}
            transition={transition}
            className="bg-blue-50 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              {userType === "patient" ? "Patient Login" : "Doctor Login"}
            </h2>
            <div className="space-y-4">
              {userType === "patient" ? (
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg bg-[#E3EAFF]"
                  required
                />
              ) : (
                <input
                  type="text"
                  placeholder="License Number"
                  className="w-full p-3 border rounded-lg bg-[#E3EAFF]"
                  required
                />
              )}
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg bg-[#E3EAFF]"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-[#4CC0BF] text-black py-2 rounded-lg font-bold hover:bg-[#3d7473] transition"
            >
              Login
            </button>
            <p className="text-center text-gray-600 mt-4 text-sm">
              Don't have an account?{" "}
              <button onClick={() => navigate('/signup')} className="text-blue-500 hover:underline">
                Sign Up
              </button>
            </p>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
