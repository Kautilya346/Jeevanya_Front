import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AIDiagnose = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    symptoms: "",
    symptomDuration: "Hours",
    painLevel: 5,
    image: null,
    imagePreview: null,
    aiDiagnosis: "",
    confidenceScore: "",
    riskLevel: "",
    recommendation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: file, imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeWithAI = async () => {
    if (!formData.symptoms && !formData.image) {
      alert("Please enter symptoms or upload an image.");
      return;
    }

    // Mock AI API call (Replace with Gemini API)
    setTimeout(() => {
      setFormData({
        ...formData,
        aiDiagnosis: "Possible Skin Infection",
        confidenceScore: "85%",
        riskLevel: "Moderate",
        recommendation:
          "Apply antiseptic cream. If symptoms persist, consult a doctor.",
      });
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-b from-[#E1F5FE]  to-[#FFFFFF] p-6 rounded-4xl pt-10">
  <h1
        onClick={() => navigate("/")}
        className="text-center text-3xl mb-10 font-bold text-[#3498DB] cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
        style={{ fontFamily: "Pixelcraft, sans-serif" }}
  >
        Dhanvantari AI
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left Column - User Info and Image Upload */}
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-200 transition-all hover:shadow-md">
          <h3 className="text-xl text-center font-semibold mb-2 text-gray-700">Personal Information</h3>
          <hr className="mb-3" />
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Your age"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-200 transition-all hover:shadow-md">
        <h3 className="text-xl text-center font-semibold mb-2 text-gray-700">Medical Image</h3>
        <hr className="mb-3" />
        <div>
          <label className="block text-gray-600 mb-1">Upload Image (Optional):</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer block">
              <div className="flex flex-col items-center justify-center py-2">
                {!formData.imagePreview ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-500">Click to upload an image</p>
                  </>
                ) : (
                  <img
                    src={formData.imagePreview}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                )}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column - Symptoms and Results */}
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-200 transition-all hover:shadow-md">
        <h3 className="text-xl text-center font-semibold mb-2 text-gray-700">Symptoms Information</h3>
        <hr className="mb-3" />
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Symptoms:</label>
            <textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              rows="3"
              placeholder="Describe your symptoms here..."
            ></textarea>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Time since Onset:</label>
              <select
                name="symptomDuration"
                value={formData.symptomDuration}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option>Hours</option>
                <option>Days</option>
                <option>Weeks</option>
                <option>Months</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-600 mb-4">Pain Level: {formData.painLevel}</label>
              <div className="flex items-center space-x-2">
                <span className="text-sm">1</span>
                <input
                  type="range"
                  name="painLevel"
                  min="1"
                  max="10"
                  value={formData.painLevel}
                  onChange={handleChange}
                  className="flex-grow"
                />
                <span className="text-sm">10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analyze Button */}
      <button
        onClick={analyzeWithAI}
        className="w-full bg-[#36bfff] hover:bg-[#3498DB] text-white py-4 rounded-xl font-medium transition-colors shadow-sm hover:shadow-md flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Analyze with AI
      </button>

      {/* AI Diagnosis Results */}
      {formData.aiDiagnosis && (
        <div className="bg-white p-6 rounded-2xl shadow-md border border-sky-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">AI Diagnosis Results</h3>
            <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              {formData.confidenceScore} confidence
            </div>
          </div>
          
          <div className="rounded-xl bg-gradient-to-r from-blue-50 to-sky-50 p-4 mb-4">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-lg font-medium text-gray-800">Potential Condition</h4>
            </div>
            <p className="text-gray-700 ml-8">{formData.aiDiagnosis}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-sm">Risk Level</p>
              <p className="font-medium text-gray-800 mt-1">{formData.riskLevel}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-gray-500 text-sm">Action Required</p>
              <p className="font-medium text-gray-800 mt-1">
                {formData.riskLevel === 'Low' ? 'Monitor' : 
                  formData.riskLevel === 'Medium' ? 'Consult Doctor' : 'Urgent Care'}
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500 text-sm">Recommendation:</p>
            <p className="text-gray-700 mt-1">{formData.recommendation}</p>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
  );
};

export default AIDiagnose;
