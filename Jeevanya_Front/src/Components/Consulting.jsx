import React from 'react';

const HealthConsultation = () => {
  const specialties = [
    "Period doubts or Pregnancy",
    "Acne, pimple or skin issues",
    "Cold, cough or fever",
    "Child not feeling well",
    "Depression or anxiety"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold text-gray-700 mb-2">Consult top doctors online</h1>
      <p className="text-gray-600 mb-8">Private online consultations with verified doctors</p>

      <div className="flex flex-wrap justify-center gap-8">
        {specialties.map((title, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-60">
            <img
              src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png"
              alt={title}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-gray-700 text-sm mb-2 text-center">{title}</h3>
            <button className="text-blue-500 text-xs font-semibold">CONSULT NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthConsultation;
