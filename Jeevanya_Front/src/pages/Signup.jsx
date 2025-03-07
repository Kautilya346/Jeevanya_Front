import { useState } from 'react';

export default function Signup() {
  const [userType, setUserType] = useState('patient');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialty: '',
    license: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Buttons */}
      <div className="flex justify-center gap-4 p-6">
        <span className='text-gray-600 font-bold py-2'>Register As A</span>
        <button
          onClick={() => setUserType('doctor')}
          className={`px-6 py-2 rounded-full ${
            userType === 'doctor'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Doctor
        </button>
        <button
          onClick={() => setUserType('patient')}
          className={`px-6 py-2 rounded-full ${
            userType === 'patient'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Patient
        </button>
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-8">
        {/* Image Container */}
        <div className={`flex-1 ${userType === 'patient' ? 'order-first' : 'order-last'}`}>
          <div className="bg-gray-200 rounded-lg h-96 w-full flex items-center justify-center">
            <span className="text-gray-500">
              {userType === 'patient' ? 'Patient Image' : 'Doctor Image'}
            </span>
          </div>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex-1 max-w-md bg-[#D7EFFF] p-8 rounded-xl shadow-lg">
          {userType === 'patient' ? (
            <>
              <h2 className="text-2xl font-bold mb-6">Patient Form</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded-lg bg-[#E3EAFF]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-lg bg-[#E3EAFF]"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded-lg bg-[#E3EAFF]"
                  required
                />
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Doctor Form</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Specialty"
                  className="w-full p-2 border rounded-lg"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="License Number"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="mt-6 w-full bg-[#C3C7FF] text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}