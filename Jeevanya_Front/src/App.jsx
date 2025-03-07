import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD

import NotFound from "./pages/NotFound";
import AIDiagnose from "./pages/AI_Diagonise";
=======
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import AIDiagnose from "./pages/AIDiagnose";
>>>>>>> 70e66651069ff41ab0e6a228ebb0354c92045b58
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Contactdoctor from "./pages/contactdoctor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aidiagnose" element={<AIDiagnose />} />
<<<<<<< HEAD
        <Route path="/contactdoctor" element={<Contactdoctor />} />
=======
        <Route path="/UserProfile" element={<UserProfile />} />
>>>>>>> 70e66651069ff41ab0e6a228ebb0354c92045b58
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
