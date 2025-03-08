import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const ConsultDoctor = () => {
  const location = useLocation();
  const doctor = location.state?.doctor;
  const [symptoms, setSymptoms] = useState("");

  const handleSendReport = async () => {
    if (!symptoms.trim()) {
      toast.error("Please enter symptoms before sending the report.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/report/setFirstReport",
        {
          doctorId: doctor._id,
          symptoms,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Report Sent:", response.data);
      toast.success("Report sent successfully!");
    } catch (error) {
      console.error(
        "Error sending report:",
        error.response?.data || error.message
      );
      toast.error("Failed to send report. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-xl p-8">
        {doctor ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side - Doctor Details */}
            <div className="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
                Consult Doctor
              </h1>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-blue-300 rounded-full flex items-center justify-center text-2xl font-semibold text-white">
                  {doctor.name.charAt(0)}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mt-4">
                  {doctor.name}
                </h2>
                <p className="text-lg text-blue-600 font-medium">
                  {doctor.speciality}
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-700">
                  <strong>Gender:</strong> {doctor.gender}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>License:</strong> {doctor.licenseNumber}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Hospital ID:</strong> {doctor.hospitalId || "N/A"}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Email:</strong> {doctor.email}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Contact:</strong> {doctor.phone_number}
                </p>
              </div>
            </div>

            {/* Right Side - Symptoms Input */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Describe Your Symptoms
              </h2>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                placeholder="Write your symptoms here..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              ></textarea>
              <button
                onClick={handleSendReport}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Report
              </button>
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-center text-lg">
            No doctor selected.
          </p>
        )}
      </div>
    </div>
  );
};

export default ConsultDoctor;
