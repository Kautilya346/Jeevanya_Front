import React from 'react';
import { FcVideoCall } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const ReportPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-10">
      <h1 className="text-4xl font-bold mb-6">Report Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
              <p className="text-red-600 font-bold">active</p>
              <h2 className="text-xl font-bold">Henry</h2>
              <p className="text-gray-500">Did-852898837359</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
            <h2 className="text-xl font-bold">Current Prescription</h2>
            <p>Lisinopril 10 mg tablet</p>
            <p>Sig: Take one tablet by mouth once daily for hypertension.</p>
            <p>Dispense: 30 tablets</p>
            <p>Refills: 2</p>
            <p>Loratadine 10 mg tablet (over-the-counter)</p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md col-span-1">
            <h2 className="text-xl font-bold">First Consultation</h2>
            <p>The patient presents for a routine check-up and reports feeling generally well. They mention occasional knee pain, especially after walking long distances, and mild heartburn after meals.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Chat with <span className="text-gray-500">Henry</span></h2>
            <FcVideoCall className='text-[50px] hover:cursor-pointer' onClick={() => navigate('/videocall')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;