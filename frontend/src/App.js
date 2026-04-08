import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Workers from "./pages/Workers";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import EmployeeProfile from "./pages/EmployeeProfile";
import PostJob from "./pages/PostJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employee-profile" element={<EmployeeProfile />} />
<Route path="/post-job" element={<PostJob />} />
<Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;