import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_KEY = "AIzaSyCNpguGClxDMocK7z4NNEHScS5sXvhS2Sg";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const doctorDomains = [
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Orthopedic",
  "Gastroenterologist",
  "Pulmonologist",
  "Endocrinologist",
  "Oncologist",
  "Psychiatrist",
  "Ophthalmologist",
];

const ContactDoctor = () => {
  const [symptoms, setSymptoms] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [doctorDomain, setDoctorDomain] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setDoctorDomain("");
    setDoctors([]);
    try {
      let result = selectedDomain;
      if (!selectedDomain && symptoms.trim()) {
        const geminiResponse = await axios.post(API_URL, {
          contents: [
            {
              parts: [
                {
                  text: `Based on these symptoms: "${symptoms}", suggest a doctor from this list only: ${doctorDomains.join(
                    ", "
                  )}. Return only one word that matches exactly from this list.`,
                },
              ],
            },
          ],
        });
        result =
          geminiResponse?.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
          "Unknown";
        if (!doctorDomains.includes(result)) {
          result = "Unknown";
        }
      }

      setDoctorDomain(result);
      if (result !== "Unknown") {
        const doctorResponse = await axios.get(
          `http://localhost:3000/api/doctor/getallDomaindoctors?speciality=${result}`
        );
        setDoctors(doctorResponse.data.doctors || []);
      }
    } catch (err) {
      setError("Failed to fetch doctor domain. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.h1 className="text-3xl font-bold mb-6 text-blue-700">
        Find the Right Doctor
      </motion.h1>
      <motion.input
        type="text"
        placeholder="Enter your symptoms..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
      />
      <span className="my-4 text-gray-600">OR</span>
      <motion.select
        value={selectedDomain}
        onChange={(e) => setSelectedDomain(e.target.value)}
        className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a Specialist</option>
        {doctorDomains.map((domain) => (
          <option key={domain} value={domain}>
            {domain}
          </option>
        ))}
      </motion.select>
      <motion.button
        onClick={handleSearch}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Searching..." : "Find Doctor"}
      </motion.button>
      {error && <p className="mt-3 text-red-500">{error}</p>}
      {doctorDomain && (
        <p className="mt-4 text-lg font-semibold text-blue-600">
          Suggested Specialist: {doctorDomain}
        </p>
      )}
      {doctors.length > 0 && (
        <motion.div className="mt-6 w-full max-w-2xl bg-white p-6 shadow-xl rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
            Available Doctors
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {doctors.map((doctor) => (
              <li
                key={doctor._id}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-md"
              >
                <strong className="text-lg text-gray-800">{doctor.name}</strong>
                <p className="text-blue-600 font-medium">{doctor.speciality}</p>
                <p className="text-sm text-gray-600">Gender: {doctor.gender}</p>
                <p className="text-sm text-gray-600">
                  License: {doctor.licenseNumber}
                </p>
                <p className="text-sm text-gray-600">
                  Hospital ID: {doctor.hospitalId || "N/A"}
                </p>
                <p className="text-sm text-gray-600">Email: {doctor.email}</p>
                <p className="text-sm text-gray-600">
                  Contact: {doctor.phone_number}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      {doctorDomain && doctors.length === 0 && !loading && (
        <p className="mt-4 text-gray-500">
          No doctors found for this specialty.
        </p>
      )}
    </div>
  );
};

export default ContactDoctor;
