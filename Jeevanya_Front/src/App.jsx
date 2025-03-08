import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import AIDiagnose from "./pages/AIDiagnose";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Contactdoctor from "./pages/contactdoctor";
import { VideoCall } from "./Components/VideoCall";
import CheckPatient from "./pages/CheckPatient";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aidiagnose" element={<AIDiagnose />} />
        <Route path="/contactdoctor" element={<Contactdoctor />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/checkpatient" element={<CheckPatient />} />
        <Route path="/reportpage" element={<ReportPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/videocall" element={<VideoCall />} />
      </Routes>
    </Router>
  );
}

export default App;
