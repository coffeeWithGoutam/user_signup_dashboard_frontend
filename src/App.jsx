// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import SignUp from "./pages/SignUpForm";
import UserDashboard from "./pages/UserDashboard";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
