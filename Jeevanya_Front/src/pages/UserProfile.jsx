import React from "react";

const UserProfile = () => {
  const appointments = [
    { doctor: "Manish Mittal", date: "11/04/25", reason: "ADHD and anxiety" },
  ];

  const reports = [
    { doctor: "Manish Mittal", date: "11/04/25", reason: "ADHD and anxiety" },
    { doctor: "Manish Mittal", date: "11/04/25", reason: "ADHD and anxiety" },
    { doctor: "Manish Mittal", date: "11/04/25", reason: "ADHD and anxiety" },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-blue-100 to-white min-h-screen p-4 md:p-8 space-y-6">
      <h1 className="text-2xl font-bold">Welcome Back</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Section */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-teal-300 rounded-full mb-4"></div>
            <h3 className="font-semibold text-lg">Manav Dosa</h3>
            <p className="text-sm text-gray-500">PT-852980837369</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-4 space-y-2">
            <h3 className="font-bold text-lg">Information</h3>
            <p>
              <strong>DOB:</strong> 11/02/05
            </p>
            <p>
              <strong>Gender:</strong> Male
            </p>
            <p>
              <strong>Phone no:</strong> 8800104649
            </p>
            <p>
              <strong>Mail:</strong> Male
            </p>
            <p>
              <strong>Emergency no:</strong> -
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="md:col-span-3 space-y-6">
          {/* Upcoming Appointments */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Appointments:</h2>
            {appointments.map((appt, index) => (
              <div
                key={index}
                className="bg-blue-50 p-4 rounded-lg flex justify-between items-center text-sm mb-2"
              >
                <div>
                  <p className="font-bold">Doctor</p>
                  <p>{appt.doctor}</p>
                </div>
                <div>
                  <p className="font-bold">Date</p>
                  <p>{appt.date}</p>
                </div>
                <div>
                  <p className="font-bold">Reason</p>
                  <p>{appt.reason}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Reports */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Previous Reports</h2>
            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-blue-50 p-4 rounded-lg flex justify-between items-center text-sm mb-2"
              >
                <div>
                  <p className="font-bold">Doctor</p>
                  <p>{report.doctor}</p>
                </div>
                <div>
                  <p className="font-bold">Date</p>
                  <p>{report.date}</p>
                </div>
                <div>
                  <p className="font-bold">Reason</p>
                  <p>{report.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
