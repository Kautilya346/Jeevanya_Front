import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import doctor from "../assests/doctor.png";
import patient from "../assests/patient.png";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [userType, setUserType] = useState("patient");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    speciality: "",
    licenseNumber: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const transition = { type: "spring", stiffness: 120, damping: 15 };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const endpoint =
      userType === "patient"
        ? "http://localhost:3000/api/auth/registerpatient"
        : "http://localhost:3000/api/auth/registerdoctor";

    const payload =
      userType === "patient"
        ? {
            name: formData.name,
            email: formData.email,
            phone_number: formData.phone_number,
            password: formData.password,
            dateOfBirth: formData.dateOfBirth,
            gender: formData.gender,
          }
        : {
            name: formData.name,
            email: formData.email,
            phone_number: formData.phone_number,
            password: formData.password,
            speciality: formData.speciality,
            licenseNumber: formData.licenseNumber,
          };

    try {
      const response = await axios.post(endpoint, payload);
      console.log("Signup Successful:", response.data);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#C2E6FF] to-[#FFFFFF] p-6">
      <div className="bg-gradient-to-b from-[#D7EFFF] to-[#FFFFFF] shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
        <motion.div
          initial={false}
          animate={{ x: userType === "patient" ? 0 : -20, opacity: 1 }}
          transition={transition}
          className={`flex-1 ${userType === "patient" ? "order-first" : "order-last"}`}
        >
          <img src={userType === "patient" ? patient : doctor} alt="Signup" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{ x: userType === "patient" ? 0 : 20, opacity: 1 }}
          transition={transition}
          className="flex-1 max-w-md w-full"
        >
          <div className="flex justify-center gap-4 mb-6">
            <div className="relative flex bg-gray-200 rounded-full p-1">
              <button onClick={() => setUserType("doctor")} className="relative px-6 py-2 rounded-full text-gray-700 z-10 cursor-pointer">Doctor</button>
              <button onClick={() => setUserType("patient")} className="relative px-6 py-2 rounded-full text-gray-700 z-10 cursor-pointer">Patient</button>
              <motion.div layoutId="activeButton" className="absolute top-0 bottom-0 w-1/2 bg-[#4CC0BF] rounded-full" initial={false} animate={{ left: userType === "doctor" ? "0%" : "50%" }} transition={{ type: "spring", stiffness: 300, damping: 20 }} />
            </div>
          </div>

          <motion.form onSubmit={handleSignup} initial={false} animate={{ x: 0, opacity: 1 }} transition={transition} className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">{userType === "patient" ? "Patient Registration" : "Doctor Registration"}</h2>
            <div className="space-y-4">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg bg-[#E3EAFF]" required />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg bg-[#E3EAFF]" required />
              <input type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} className="w-full p-3 border rounded-lg bg-[#E3EAFF]" required />
              {userType === "patient" ? (
                <>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full p-3 border rounded-lg bg-[#E3EAFF]" required />
                  <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 border rounded-lg bg-[#E3EAFF]" required>
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </>
              ) : (
                <>
                  <input type="text" name="speciality" placeholder="Speciality" value={formData.speciality} onChange={handleChange} className="w-full p-3 border rounded-lg bg-[#E3EAFF]" required />
                  <input type="text" name="licenseNumber" placeholder="License Number" value={formData.licenseNumber} onChange={handleChange} className="w-full p-3 border rounded-lg bg-[#E3EAFF]" required />
                </>
              )}
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-lg bg-[#E3EAFF]" required />
            </div>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            <button type="submit" className="mt-6 w-full bg-[#4CC0BF] text-black py-2 rounded-lg font-bold hover:bg-[#3d7473] transition">Sign Up</button>
            <p className="text-center text-gray-600 mt-4 text-sm">Already have an account? <button onClick={() => navigate('/login')} className="text-blue-500 hover:underline cursor-pointer">Login</button></p>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
