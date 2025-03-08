import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcVideoCall } from "react-icons/fc";
import Chat from "../Components/Chat";

const CheckPatient = () => {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null);
  const [message, setMessage] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setMessage("");
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen p-8">
      <div className="">
        <h1 className="text-4xl font-bold mb-8">Patient Details</h1>

        <div className="w-full">
          <div className="flex items-center justify-around w-full bg-[#4CC0BF] p-6 rounded-2xl shadow-md">
            <div className="w-36 h-36 bg-gray-300 rounded-full mb-4"></div>
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center w-3xl">
              <h2 className="text-2xl font-bold">Junn Jaas</h2>
              <p className="text-gray-500">PT-852898837589</p>
              <p>DOB: 11/02/05</p>
              <p>Member since: 15/06/23</p>
            </div>
            <div>
              {["Diagnosis", "Suggestion", "Prescription"].map((type) => (
                <div
                  key={type}
                  className="p-4 m-2 bg-amber-300 hover:bg-amber-400 rounded-2xl shadow-md flex flex-col items-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
                  onClick={() => openModal(type)}
                >
                  <button className="cursor-pointer transition-colors duration-200 ease-in-out">
                    Send {type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Past Medical History</h3>
            <p>
              The patient has a history of hypertension, diagnosed at the age of
              45, managed with lisinopril. Diagnosed with Type 2 Diabetes Mellitus
              at 50, controlled with metformin and lifestyle changes. They also
              suffer from osteoarthritis and GERD, managed with NSAIDs and
              omeprazole.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">First Consultation</h3>
            <p>
              The patient presents for a routine check-up, mentioning knee pain
              after long walks and mild heartburn after meals.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mt-8">
        <h3 className="text-xl font-semibold mb-4">Current Prescription</h3>
        <ul className="list-disc pl-5">
          <li>
            Lisinopril 10 mg tablet - Take once daily for hypertension.
            Dispense: 30 tablets, Refills: 2.
          </li>
          <li>Loratadine 10 mg tablet (over-the-counter)</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold mb-4">
            Contact Doctor <span className="font-bold">Junn Jaas</span>
          </h3>
          <FcVideoCall
            className="text-[50px] hover:cursor-pointer"
            onClick={() => navigate("/videocall")}
          />
        </div>
        <Chat receiver="67cc1f98018e5d2f186f36ed" sender="67cbe0d411cdd39989ad62c7" />
      </div>

      {/* Modal */}
      {modalType && (
        <>
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-md w-96">
              <h3 className="text-xl font-semibold mb-4">Send {modalType}</h3>
              <textarea
                className="w-full p-2 border rounded-md"
                rows="4"
                placeholder={`Type your ${modalType.toLowerCase()} here`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded-md mr-2 transition-transform duration-200 ease-in-out hover:bg-gray-400 active:bg-gray-500 hover:scale-105"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button className="px-4 py-2 bg-amber-200 rounded-md transition-transform duration-200 ease-in-out hover:bg-amber-300 active:bg-amber-400 hover:scale-105">
                  Send
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckPatient;