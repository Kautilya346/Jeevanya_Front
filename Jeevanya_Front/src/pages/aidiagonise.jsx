import { useState } from "react";

const AIDiagnose = () => {
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
    <div className="max-w-xl mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        AI Self-Diagnosis
      </h2>

      {/* User Info */}
      <div className="space-y-2">
        <label className="block">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 rounded"
        />

        <label className="block">Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 rounded"
        />

        <label className="block">Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 rounded"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      {/* Symptoms Entry */}
      <div className="mt-4 space-y-2">
        <label className="block">Symptoms:</label>
        <textarea
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 rounded"
        ></textarea>

        <label className="block">Duration:</label>
        <select
          name="symptomDuration"
          value={formData.symptomDuration}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 rounded"
        >
          <option>Hours</option>
          <option>Days</option>
          <option>Weeks</option>
        </select>

        <label className="block">Pain Level: {formData.painLevel}</label>
        <input
          type="range"
          name="painLevel"
          min="1"
          max="10"
          value={formData.painLevel}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      {/* Image Upload */}
      <div className="mt-4 space-y-2">
        <label className="block">Upload Image (Optional):</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 bg-gray-800 rounded"
        />
        {formData.imagePreview && (
          <img
            src={formData.imagePreview}
            alt="Preview"
            className="mt-2 w-full h-40 object-cover rounded"
          />
        )}
      </div>

      {/* Analyze Button */}
      <button
        onClick={analyzeWithAI}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        Analyze with AI
      </button>

      {/* AI Diagnosis Results */}
      {formData.aiDiagnosis && (
        <div className="mt-4 p-4 bg-gray-800 rounded">
          <h3 className="text-xl font-semibold">AI Diagnosis</h3>
          <p>
            <strong>Condition:</strong> {formData.aiDiagnosis}
          </p>
          <p>
            <strong>Confidence:</strong> {formData.confidenceScore}
          </p>
          <p>
            <strong>Risk Level:</strong> {formData.riskLevel}
          </p>
          <p>
            <strong>Recommendation:</strong> {formData.recommendation}
          </p>
        </div>
      )}
    </div>
  );
};

export default AIDiagnose;
