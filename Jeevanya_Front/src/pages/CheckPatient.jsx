import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcVideoCall } from "react-icons/fc";

const CheckPatient = () => {

  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Patient Details</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Patient Info */}
        <div className="bg-white p-6 rounded-2xl shadow-md col-span-1 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
          <h2 className="text-2xl font-bold">Junn Jaas</h2>
          <p className="text-gray-500">PT-852898837589</p>
        </div>
        
        {/* Contact Info */}
        <div className="bg-white p-6 rounded-2xl shadow-md col-span-2">
          <h3 className="text-xl font-semibold mb-4">Contact info</h3>
          <p>adityakarwal@gmail.com</p>
          <p>+91 8800014649</p>
          <p>Ghaziabad, Uttar Pradesh</p>
          <h3 className="text-xl font-semibold mt-6">Info</h3>
          <p>DOB: 11/02/05</p>
          <p>Member since: 15/06/23</p>
        </div>
      </div>

      {/* Medical History and Consultation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Past Medical History</h3>
          <p>
            The patient has a history of hypertension, diagnosed at the age of 45, managed with lisinopril. 
            Diagnosed with Type 2 Diabetes Mellitus at 50, controlled with metformin and lifestyle changes. 
            They also suffer from osteoarthritis and GERD, managed with NSAIDs and omeprazole.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">First Consultation</h3>
          <p>
            The patient presents for a routine check-up, mentioning knee pain after long walks and mild heartburn after meals.
          </p>
        </div>
      </div>

      {/* Current Prescription */}
      <div className="bg-white p-6 rounded-2xl shadow-md mt-8">
        <h3 className="text-xl font-semibold mb-4">Current Prescription</h3>
        <ul className="list-disc pl-5">
          <li>Lisinopril 10 mg tablet - Take once daily for hypertension. Dispense: 30 tablets, Refills: 2.</li>
          <li>Loratadine 10 mg tablet (over-the-counter)</li>
        </ul>
      </div>

      {/* Chat Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mt-8">
        <h3 className="text-xl font-semibold mb-4">Contact Doctor<span className="font-bold">Junn Jaas</span></h3>
        <FcVideoCall className='text-[50px] hover:cursor-pointer'
          onClick={()=>{
          navigate('/videocall')
          }}
        />
      </div>
    </div>
  );
};

export default CheckPatient;
