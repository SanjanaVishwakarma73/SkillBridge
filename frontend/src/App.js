// ✅ ALL IMPORTS AT TOP
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Workers from "./pages/Workers";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import EmployeeProfile from "./pages/EmployeeProfile";
import PostJob from "./pages/PostJob";
import Navbar from "./components/Navbar";

// 👇 THEN FUNCTION
function App() {
  return (
    <BrowserRouter>
      
      {/* ✅ Navbar will appear on ALL pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee-profile" element={<EmployeeProfile />} />
        <Route path="/post-job" element={<PostJob />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;