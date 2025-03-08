import React, { useEffect, useState } from "react";
import { FcVideoCall } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Chat from "../Components/Chat";

const ReportPage = () => {
  const navigate = useNavigate();
  const { reportId } = useParams();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/report/getreport/${reportId}`,
          {
            withCredentials: true,
          }
        );
        console.log(response.data)
        setReport(response.data.report);
      } catch (err) {
        setError("Failed to fetch report");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  }, [reportId]);

  if (loading) return <p className="text-center text-lg">Loading report...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!report) return <p className="text-center text-lg">No report found.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-10">
      <h1 className="text-4xl font-bold mb-6">Report Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6 col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
                <p
                  className={`text-red-600 font-bold ${
                    report.status === "Completed"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {report.status}
                </p>
                <h2 className="text-xl font-bold">
                  {report.patient?.name || "Unknown"}
                </h2>
                <p className="text-gray-500">Did-{report.patient?._id}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Diagnosis</h2>
              {report.medications.length > 0 ? (
                report.medications.map((med, index) => <p key={index}>{med}</p>)
              ) : (
                <p>No prescribed medications</p>
              )}
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Current Prescription</h2>
              <p>
                {report.suggestions || "No consultation details available."}
              </p>
            </div>
          </div>
          <div className="space-y-6 col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Suggestions</h2>
              <p>
                {report.suggestions || "No consultation details available."}
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Symptoms</h2>
              <p>
                {report.suggestions || "No consultation details available."}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <div className="flex justify-between items-center pb-2">
            <h2 className="text-xl font-bold">
              Connect with Doctor
            </h2>
            <FcVideoCall
              className="text-[40px] hover:cursor-pointer"
              onClick={() => navigate("/videocall")}
            />
          </div>
              <Chat receiver={report.doctor._id} sender={report.patient._id} />
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
