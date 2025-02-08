import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext"; // Ensure this is correctly imported

import { ProtectedRoute } from "./Components/Common/ProtectedRoute"; // If needed
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Dashboard from "./Components/Common/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import About from "./Pages/About";
import ProfileForm from "./Pages/ProfileForm";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import BmiCalculator from "./Pages/BmiCalculator";
import WorkoutUpdate from "./Pages/WorkoutUpdate";
import ProgressReport from "./Pages/ProgressReport";
import ShowProfile from "./Pages/ShowProfile";

const RootRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return <Navigate to={user ? "/home" : "/login"} replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Placed Navbar outside Routes for global usage */}
        <Routes>
          <Route path="/" element={<RootRoute />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/createprofile" element={<ProfileForm />} />
          <Route path="/showprofile" element={<ShowProfile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/bmi" element={<BmiCalculator />} />
          <Route path="/workoutupdate" element={<WorkoutUpdate />} />
          <Route path="/progressreport" element={<ProgressReport />} />
          <Route path="/home" element={<Home />} />

          {/* Catch all unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer /> {/* Placed Footer outside Routes for global usage */}
      </Router>
    </AuthProvider>
  );
};

export default App;
