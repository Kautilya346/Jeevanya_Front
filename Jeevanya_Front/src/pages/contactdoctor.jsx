import { useState } from "react";
import axios from "axios";

const API_KEY = "AIzaSyCNpguGClxDMocK7z4NNEHScS5sXvhS2Sg"; // Replace with your actual Gemini API key
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
  const [doctorDomain, setDoctorDomain] = useState("");
  const [doctors, setDoctors] = useState([]); // Store doctor details
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!symptoms.trim()) {
      setError("Please enter symptoms.");
      return;
    }

    setLoading(true);
    setError("");
    setDoctorDomain("");
    setDoctors([]);

    try {
      // Call Gemini API to get doctor domain
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

      let result =
        geminiResponse?.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
        "Unknown";

      // Ensure the response is one of the predefined doctor domains
      if (!doctorDomains.includes(result)) {
        result = "Unknown";
      }

      setDoctorDomain(result);

      if (result !== "Unknown") {
        // Fetch doctors based on detected domain
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Find the Right Doctor</h1>

      <input
        type="text"
        placeholder="Enter your symptoms..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        className="w-full max-w-md p-2 border border-gray-300 rounded"
      />

      <button
        onClick={handleSearch}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Searching..." : "Find Doctor"}
      </button>

      {error && <p className="mt-2 text-red-500">{error}</p>}

      {doctorDomain && (
        <p className="mt-4 text-lg font-semibold">
          Suggested Specialist:{" "}
          <span className="text-blue-600">{doctorDomain}</span>
        </p>
      )}

      {doctors.length > 0 && (
        <div className="mt-6 w-full max-w-md bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-2">Available Doctors</h2>
          <ul>
            {doctors.map((doctor) => (
              <li
                key={doctor._id}
                className="p-2 border-b border-gray-300 last:border-none"
              >
                <strong>{doctor.name}</strong> -{" "}
                {doctor.speciality[0].toUpperCase() +
                  doctor.speciality.slice(1)}
                <br />
                <span className="text-sm text-gray-600">
                  Contact: {doctor.phone_number}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {doctorDomain && doctors.length === 0 && !loading && (
        <p className="mt-4 text-gray-600">
          No doctors found for this speciality.
        </p>
      )}
    </div>
  );
};

export default ContactDoctor;
