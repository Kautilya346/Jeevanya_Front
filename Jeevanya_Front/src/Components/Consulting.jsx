import React from "react";
import { useNavigate } from "react-router-dom";
const HealthConsultation = () => {
  const navigate = useNavigate();

  const handleClick = (specialty) => {
    navigate("/contactdoctor", { state: { specialty: specialty.title } });
  };

  const specialties = [
    {
      title: "Period doubts or Pregnancy",
      icon: "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
      cta: "CONSULT NOW",
    },
    {
      title: "Acne, pimple or skin issues",
      icon: "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
      cta: "CONSULT NOW",
    },
    {
      title: "Cold, cough or fever",
      icon: "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
      cta: "CONSULT NOW",
    },
    {
      title: "Child not feeling well",
      icon: "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
      cta: "CONSULT NOW",
    },
    {
      title: "Depression or anxiety",
      icon: "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
      cta: "CONSULT NOW",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-700">
            Consult top doctors online for any health concern
          </h1>
          <p className="text-gray-600 mt-1">
            Private online consultations with verified doctors in all
            specialists
          </p>
        </div>
        <button className="mt-4 md:mt-0 border border-blue-400 text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
          View All Specialities
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-12 mt-8">
        {specialties.map((specialty, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-7">
              <img src={specialty.icon} alt={specialty.title} />
            </div>
            <h3 className=" text-gray-700 mb-2 flex-wrap ">
              {specialty.title}
            </h3>
            <button
              onClick={() => handleClick(specialty)}
              className="text-blue-400 text-sm font-medium hover:text-blue-500 cursor-pointer"
            >
              {specialty.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthConsultation;
