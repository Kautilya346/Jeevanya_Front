import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const ConsultDoctor = () => {
  const location = useLocation();
  const doctor = location.state?.doctor;
  const [symptoms, setSymptoms] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendReport = async () => {
    if (!symptoms.trim()) {
      toast.error("Please enter symptoms before sending the report.");
      return;
    }

    setIsSubmitting(true);
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
      setSymptoms("");
    } catch (error) {
      console.error(
        "Error sending report:",
        error.response?.data || error.message
      );
      toast.error("Failed to send report. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-red-500 text-center text-lg font-medium">
            No doctor selected. Please go back and select a doctor.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-[#4CC0BF] py-6 px-8">
          <h1 className="text-2xl font-bold text-white">
            Medical Consultation
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* Doctor Profile */}
          <div className="col-span-1 p-6 bg-blue-50">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
                {doctor.name.charAt(0)}
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                Dr. {doctor.name}
              </h2>
              <p className="text-[#4CC0BF] font-medium mt-1">{doctor.speciality}</p>
            </div>
            
            <div className="space-y-3 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Gender</span>
                <span className="font-medium text-gray-800">{doctor.gender}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">License No.</span>
                <span className="font-medium text-gray-800">{doctor.licenseNumber}</span>
              </div>
              {doctor.hospitalId && (
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Hospital ID</span>
                  <span className="font-medium text-gray-800">{doctor.hospitalId}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Email</span>
                <span className="font-medium text-gray-800 break-all">{doctor.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Contact</span>
                <span className="font-medium text-gray-800">{doctor.phone_number}</span>
              </div>
            </div>
          </div>  

          {/* Symptoms Form */}
          <div className="col-span-2 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Describe Your Symptoms
            </h2>
            <div className="mb-6">
              <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                Please provide detailed information about your symptoms
              </label>
              <textarea
                id="symptoms"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[200px] transition duration-200"
                placeholder="Describe when your symptoms started, their severity, any triggers, and how they affect your daily activities..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              ></textarea>
              <p className="mt-2 text-sm text-gray-500">
                Your information will be shared securely with Dr. {doctor.name}.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSendReport}
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg text-white font-medium transition duration-300 ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-[#4CC0BF] hover:bg-blue-700 shadow-md hover:shadow-lg"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Report"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultDoctor;