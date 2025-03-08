import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import AIDiagnose from "./pages/AIDiagnose";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Contactdoctor from "./pages/contactdoctor";
import Navbar from "./Components/Navbar";
import ConsultDoctor from "./pages/ConsultDoctor";
import { VideoCall } from "./Components/VideoCall";
import CheckPatient from "./pages/CheckPatient";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aidiagnose" element={<AIDiagnose />} />
        <Route path="/contactdoctor" element={<Contactdoctor />} />
        <Route path="/consultdoctor" element={<ConsultDoctor />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/checkpatient" element={<CheckPatient />} />
        <Route path="/videocall" element={<VideoCall />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
